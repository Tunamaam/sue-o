import requests
import json

url = "http://127.0.0.1:5010/generate_ept_structure"
payload = {
    "nivel": "Secundaria",
    "grado": "4to Grado",
    "tema": "Diseño de Muebles",
    "especialidad": "Carpintería",
    "area": "Educación para el Trabajo"
}

try:
    print(f"Sending request to {url}...")
    response = requests.post(url, json=payload, timeout=60)
    
    if response.status_code == 200:
        data = response.json()
        print("\n✅ SUCCESS! Received valid JSON response.")
        print(json.dumps(data, indent=2, ensure_ascii=False))
        
        # Validation checks
        if "competencias" in data and isinstance(data["competencias"], list):
            print("\n✅ Structure valid: Contains 'competencias' list.")
            if len(data["competencias"]) > 0:
                first_comp = data["competencias"][0]
                if "nombre" in first_comp and "capacidades" in first_comp and "desempenos" in first_comp:
                     print("✅ Inner Structure valid: Competency has nombre, capacidades, and desempenos.")
                else:
                     print("⚠️ Inner Structure invalid: Missing keys in competency object.")
            else:
                print("⚠️ Warning: Competencies list is empty.")
        else:
            print("\n⚠️ Structure invalid: Missing 'competencias' key or it is not a list.")
    else:
        print(f"\n❌ Error: Status Code {response.status_code}")
        print(response.text)

except Exception as e:
    print(f"\n❌ Request failed: {e}")
