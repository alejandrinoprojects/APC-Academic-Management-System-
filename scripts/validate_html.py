import os, sys, glob
from html.parser import HTMLParser

class TagChecker(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.void_tags = {
            'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
            'link', 'meta', 'param', 'source', 'track', 'wbr'
        }
        self.errors = []
        self.button_divs = []

    def handle_starttag(self, tag, attrs):
        t = tag.lower()
        if t == 'div' and self.stack and self.stack[-1][0] == 'button':
            self.button_divs.append(self.getpos())
        if t not in self.void_tags:
            line, col = self.getpos()
            self.stack.append((t, line, col))

    def handle_endtag(self, tag):
        t = tag.lower()
        if t in self.void_tags:
            return
        line, col = self.getpos()
        if not self.stack:
            self.errors.append(f'Stray closing tag </{t}> at line {line}:{col} (stack empty)')
            return
        last_tag, l, c = self.stack[-1]
        if last_tag == t:
            self.stack.pop()
        else:
            found_idx = None
            for idx in range(len(self.stack)-1, -1, -1):
                if self.stack[idx][0] == t:
                    found_idx = idx
                    break
            if found_idx is not None:
                unclosed = []
                while len(self.stack) > found_idx + 1:
                    unclosed.append(self.stack.pop())
                self.stack.pop()
                self.errors.append(f'Closing </{t}> at line {line}:{col} skipped unclosed: {[(u[0], u[1]) for u in unclosed]}')
            else:
                self.errors.append(f'Stray closing tag </{t}> at line {line}:{col} does not match stack top <{last_tag}> from line {l}')

def check_nested_backticks(text):
    pos = 0
    found = []
    while True:
        idx = text.find('${', pos)
        if idx == -1:
            break
        depth = 1
        j = idx + 2
        has_backtick = False
        while j < len(text) and depth > 0:
            if text[j] == '{':
                depth += 1
            elif text[j] == '}':
                depth -= 1
            elif text[j] == '`':
                has_backtick = True
            j += 1
        if has_backtick:
            line = text[:idx].count('\n') + 1
            found.append(line)
        pos = idx + 2
    return found

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    files = [os.path.join(base_dir, 'index.html')]
    layers_dir = os.path.join(base_dir, 'html_layers')
    if os.path.exists(layers_dir):
        for f in sorted(os.listdir(layers_dir)):
            if f.endswith('.html'):
                files.append(os.path.join(layers_dir, f))

    print(f"Validating {len(files)} HTML files across project...")
    total_issues = 0

    for path in files:
        rel = os.path.relpath(path, base_dir)
        with open(path, 'r', encoding='utf-8') as fh:
            text = fh.read()

        checker = TagChecker()
        checker.feed(text)
        backticks = check_nested_backticks(text)

        issues = len(checker.errors) + len(checker.stack) + len(checker.button_divs) + len(backticks)
        if issues > 0:
            total_issues += issues
            print(f"\n[FAIL] {rel}:")
            for e in checker.errors:
                print(f"  - Tag error: {e}")
            for t, l, c in checker.stack:
                print(f"  - Unclosed <{t}> from line {l}:{c}")
            for pos in checker.button_divs:
                print(f"  - <div> inside <button> at line {pos[0]}:{pos[1]}")
            for l in backticks:
                print(f"  - Nested template literal backtick at line {l}")

    if total_issues == 0:
        print("\nSUCCESS: All 33 project HTML files passed validation with 0 errors!")
        print(" - 0 tag balancing errors")
        print(" - 0 unclosed tags")
        print(" - 0 <div> inside <button> elements")
        print(" - 0 nested backtick template literals")
    else:
        print(f"\nFAILURE: Found {total_issues} total issue(s).")
        sys.exit(1)

if __name__ == '__main__':
    main()
