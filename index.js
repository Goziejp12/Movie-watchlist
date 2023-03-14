import { searchFilm, handleAddToWatchlist } from "./utils.js"

const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', searchFilm)

document.addEventListener('click', e => {
        if(e.target.dataset.addbtn) {
            handleAddToWatchlist(e.target.dataset.addbtn)
        }
        else if(e.target.id === "save-to-watchlist") {
            window.location.href = 'watchlist.html'
        }
})