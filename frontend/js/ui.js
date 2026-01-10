export function displayAnime(anime) {
    document.getElementById("title").textContent = anime.title;
    document.getElementById("synopsis").textContent = anime.synopsis || "No synopsis available.";
    document.getElementById("score").textContent = anime.score ? `Score: ${anime.score}` : "Score: N/A";
    document.getElementById("episodes").textContent = anime.episodes ? `Episodes: ${anime.episodes}` : "Episodes: N/A";
    document.getElementById("genres").textContent = anime.genres.length ? `Genres: ${anime.genres.join(", ")}` : "Genres: N/A";
    document.getElementById("image_url").src = anime.image_url || "placeholder.jpg";
}