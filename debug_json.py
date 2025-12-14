import re
import json

def extract_json_from_text(text):
    print(f"--- Processing Text ({len(text)} chars) ---")
    
    # 1. Intentar encontrar bloque de código JSON ```json ... ```
    match = re.search(r'```json\s*(\{.*?\})\s*```', text, re.DOTALL)
    if match:
        print("MATCH STEP 1")
        return match.group(1)
    
    # 2. Intentar parsear todo el texto directamente
    try:
        json.loads(text)
        print("MATCH STEP 2")
        return text
    except json.JSONDecodeError:
        pass

    # 3. Intentar encontrar cualquier bloque entre llaves {}
    # Greedy: First { to Last }
    match = re.search(r'(\{.*\})', text, re.DOTALL)
    if match:
        print("MATCH STEP 3")
        return match.group(1)
        
    print("NO MATCH - STEP 4")
    return text.strip()

# Test Case 1: Standard Markdown with newline
text1 = """```json
{
    "titulo": "Hola"
}
```"""

# Test Case 2: Markdown with no newline after start
text2 = """```json { "titulo": "Hola" } ```"""

# Test Case 3: The User Error Case (simulated)
text3 = """```json { "titulo_sesion": "¡Qué rico!", "proposito": "..." }""" 
# (Note: Missing closing backticks or something?)

print(f"Result 1: {extract_json_from_text(text1)}")
print(f"Result 2: {extract_json_from_text(text2)}")
print(f"Result 3: {extract_json_from_text(text3)}")
