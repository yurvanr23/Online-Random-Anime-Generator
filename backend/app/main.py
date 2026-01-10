from fastapi import FastAPI
from app.routes import anime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Random Anime Generator API",
    version="1.0.0",
    description="An API to generate random anime recommendations."
)

app.include_router(anime.router, prefix="/api/anime")

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"status": "API Running"}