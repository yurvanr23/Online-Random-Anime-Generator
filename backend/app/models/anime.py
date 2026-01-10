from pydantic import BaseModel
from typing import List, Optional

class Anime(BaseModel):
    title: str
    synopsis: Optional[str]
    score: Optional[float]
    episodes: Optional[int]
    genres: List[str]
    image_url: Optional[str]