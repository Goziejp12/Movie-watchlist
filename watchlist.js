import { filmIcon, filmDisplay1, searchInput, movieArray, searchFilm, renderHtml, handleAdd2Watchlist, handleAdd2Watchlist } from "./utils.js"

const watchlistRender = document.querySelector('.watchlist-render')
let getWatchlistMovies = JSON.parse(localStorage.getItem("watchlistMovies"))

watchlistRender.innerHTML = `<img src="${getWatchlistMovies.Poster}">`

document.getElementById('getm').addEventListener('click', () => {
    console.log('getWatchlistMovies')
})