import { filmIcon, filmDisplay1, searchInput, movieArray, searchFilm, renderHtml, handleAdd2Watchlist } from "./utils.js"

const watchlistRender = document.querySelector('.watchlist-render')
let getWatchlistMovies = JSON.parse(localStorage.getItem("watchlistMovies"))

watchlistRender.innerHTML = renderHtml(getWatchlistMovies)
