import { myFilmList, searchFilm, handleAdd2Watchlist} from "./utils.js"

const searchBtn = document.getElementById('search-btn')



searchBtn.addEventListener('click', searchFilm)
document.addEventListener('click', e => {
        if(e.target.dataset.addbtn) {
            handleAdd2Watchlist(e.target.dataset.addbtn)
            localStorage.setItem("watchlistMovies", JSON.stringify(myFilmList))
        }
})