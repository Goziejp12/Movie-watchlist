import { renderMovie } from "./utils.js"

const watchlistRender = document.querySelector('.watchlist-render')
let myMovies = []

myMovies = JSON.parse(localStorage.getItem("watchlistMovies"))


myMovies.forEach(films => {
    watchlistRender.innerHTML += renderMovie(films)
})
