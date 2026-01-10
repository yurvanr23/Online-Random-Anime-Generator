import requests

BASE_URL = "https://api.jikan.moe/v4/random/anime"

def fetch_anime_list(page=1, limit=25):
    response = requests.get(
        f"{BASE_URL}/anime",
        params = {"page": page, "limit":limit},
        timeout=10
    )

    response.raise_for_status()
    return response.json()["data"]