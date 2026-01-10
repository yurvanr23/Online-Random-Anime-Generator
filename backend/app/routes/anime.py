import requests
from fastapi import APIRouter

from app.services.anime_api import fetch_anime_list
from app.utils.randomizer import get_random_anime

BASE_URL = "https://api.jikan.moe/v4"
router = APIRouter()

def fetch_random_anime():
    try:
        response = requests.get(f"{BASE_URL}/random/anime", timeout=10)
        response.raise_for_status()
        return response.json()["data"]
    except Exception as e:
        print("Error fetching anime:", e)
        return {}

@router.get("/random")
def random_anime():
    anime = fetch_random_anime()

    # Safe access to avoid missing keys
    return {
        "title": anime.get("title", "Unknown title"),
        "synopsis": anime.get("synopsis", "No synopsis available."),
        "score": anime.get("score", "N/A"),
        "episodes": anime.get("episodes", "N/A"),
        "genres": [g.get("name", "Unknown") for g in anime.get("genres", [])],
        "image_url": anime.get("images", {}).get("jpg", {}).get(
            "large_image_url", "assets/placeholder.png"
        )
    }   