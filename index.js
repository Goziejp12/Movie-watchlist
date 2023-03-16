import { searchFilm, handleAddToWatchlist } from "./utils.js"

JSON.parse(localStorage.getItem("storedMovies"))

document.getElementById('search-btn').addEventListener('click', searchFilm)

document.addEventListener('click', e => {
        if(e.target.dataset.addbtn) {
            handleAddToWatchlist(e.target.dataset.addbtn)
        }
        else if(e.target.id === "save-to-watchlist") {
            window.location.href = 'watchlist.html'
        }
})