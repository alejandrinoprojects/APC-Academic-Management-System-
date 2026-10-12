with open('js/curriculum_workbench.js', 'r', encoding='utf-8') as f:
    text = f.read()

for code_name in ['CPEDES1', 'CPEDES2', 'SEMSTRP']:
    idx = text.find(f'"code": "{code_name}"')
    if idx != -1:
        print(f"=== {code_name} ===")
        print(text[idx-20:idx+260])
