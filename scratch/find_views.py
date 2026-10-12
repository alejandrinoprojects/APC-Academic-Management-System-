import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

views = re.findall(r'id=["\'](view-[a-zA-Z0-9_-]+|homePdProgramView|[a-zA-Z0-9_-]+View)["\']', text)
print("Views found:")
for v in sorted(set(views)):
    print(" -", v)
