import { filmIcon, filmDisplay1, searchInput, movieArray, searchFilm, renderHtml, handleAdd2Watchlist} from "./utils.js"

const searchBtn = document.getElementById('search-btn')


searchBtn.addEventListener('click', searchFilm)
document.addEventListener('click', e => {
        if(e.target.dataset.watchlist) {
            localStorage.setItem("watchlistMovies", JSON.stringify(handleAdd2Watchlist(e.target.dataset.watchlist)))
            // console.log(JSON.parse(localStorage.getItem("watchlistMovies")))
        }
})