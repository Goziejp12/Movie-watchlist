let movieResults = []
let myFilmList = []
const filmIcon = document.querySelector('.film-icon')
const searchInput = document.querySelector('.search-input')
const filmDisplay1 = document.querySelector('.film-display1')
const addbtn = document.getElementById('addbtn')
const removebtn = document.getElementById('removebtn')

function searchFilm(e) {
    e.preventDefault()
    filmIcon.style.display = 'none'
    fetch(`https://www.omdbapi.com/?apikey=e76721f7&s=${searchInput.value}`)
        .then(response => response.json())
        .then(data => {
            data.Search.slice(0, 5).forEach((filmSearchResults) => {
                fetch(`https://www.omdbapi.com/?apikey=e76721f7&t=${filmSearchResults.Title}&plot=short`)
                    .then(response => response.json())
                    .then(data => {
                        movieResults.push(data)
                        filmDisplay1.innerHTML += renderMovie(data)
                    })
            })
        })
}

function renderMovie(data) {
    let html = ''

    return html = `
        <div class="film-display2">
            <img src="${data.Poster}">
                        
            <div class="three">
                <div class="one">
                    <h4 class="title">${data.Title}</h4>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <p class="rating">${data.imdbRating}</p>
                </div>
                <div class="two">
                    <p class="runtime">${data.Runtime}</p>
                    <p class="genre">${data.Genre}</p>
                    <i class="fa-solid fa-circle-plus" id="addbtn" data-addbtn="${data.imdbID}">watchlist</i>
                    <i class="fa-solid fa-circle-minus" id="removebtn" data-removebtn="${data.imdbID}">watchlist</i>
                </div>
                <p class="plot">${data.Plot}</p>
            </div>
        </div>
        <hr />`
}

function handleAdd2Watchlist(addedmovie) {
    const movies = movieResults.filter(movie => {
        return movie.imdbID === addedmovie
    })[0]
    myFilmList.unshift(movies)
    return movies
    
}

export{ addbtn, removebtn, myFilmList, searchFilm, renderMovie, handleAdd2Watchlist }