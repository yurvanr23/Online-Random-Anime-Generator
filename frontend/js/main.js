import { fetchRandomAnime } from "./api.js";
import { displayAnime } from "./ui.js";

const loader = document.getElementById("loader");
const card = document.querySelector(".card");
const button = document.getElementById("generate");

document.getElementById("generate").addEventListener("click", async () => {
    try {
        button.disabled = true;

        // scrolls to top
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });

        loader.classList.remove("hidden");

        const API_URL = "https://random-anime-generator.onrender.com/api/anime/random";
        const response = await fetch(API_URL);
        //const response = await fetch("http://127.0.0.1:8000/");
        //const anime = await response.json();
        const anime = await fetchRandomAnime();

        card.classList.remove("fade");
        void card.offsetWidth; // restart animation
        card.classList.add("fade");
        
        console.log(anime); // debug to see if it works
        displayAnime(anime);

    } catch (err) {
        console.error(err);
    } finally {
        loader.classList.add("hidden");
        button.disabled = false;
    }
    //displayAnime(anime);
});

 // Dark Mode
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
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
