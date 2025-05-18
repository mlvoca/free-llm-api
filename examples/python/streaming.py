import requests

url = "https://mlvoca.com/api/generate"
data = {
    "model": "deepseek-r1:1.5b",
    "prompt": "Why is the sky blue?"
}

response = requests.post(url, json=data)

if response.status_code == 200:
    print(response.text)  # Print the response
else:
    print(f"Error: {response.status_code}")
