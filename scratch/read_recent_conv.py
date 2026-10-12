import json

with open(r'C:\Users\Dean Alejandrino\.gemini\antigravity\brain\ca63be6e-854f-46c4-b513-244607d1eb6e\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        obj = json.loads(line)
        if obj.get('created_at', '') > '2026-10-08T03:50:00Z':
            t = obj.get('type')
            if t in ('USER_INPUT', 'PLANNER_RESPONSE'):
                c = obj.get('content', '')
                if c:
                    print(f"[{t}] {c[:300]}\n")
