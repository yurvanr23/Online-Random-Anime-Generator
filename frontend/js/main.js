import { fetchRandomAnime } from "./api.js";
import { displayAnime } from "./ui.js";

document.getElementById("generate").addEventListener("click", async () => {
    
    try {
        const response = await fetch("http://127.0.0.1:8000/api/anime/random");
        //const anime = await response.json();
        const anime = await fetchRandomAnime();
        console.log(anime); // debug to see if it works
        displayAnime(anime);
    } catch (err) {
        console.error(err);
    }
    //displayAnime(anime);
});

/*document.getElementById("generate").addEventListener("click", async () => {
    const response = await fetch("http://127.0.0.1:8000/api/anime/random");
    const anime = await response.json();

    document.getElementById("title").textContent = anime.title;
    document.getElementById("score").textContent = `⭐ ${anime.score ?? "N/A"}`;
    document.getElementById("episodes").textContent = `🎬 ${anime.episodes ?? "?"} eps`;
    document.getElementById("genres").textContent = anime.genres.join(", ");
    document.getElementById("synopsis").textContent = anime.synopsis;
    document.getElementById("image_url").src = anime.image_url;
});*/
