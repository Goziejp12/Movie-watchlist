let movieResults = []
let myFilmList = []
const filmIcon = document.querySelector('.film-icon')
const searchInput = document.querySelector('.search-input')
const filmDisplay1 = document.querySelector('.film-display1')


function searchFilm(e) {
    e.preventDefault()
    filmIcon.style.display = 'none'
    fetch(`https://www.omdbapi.com/?apikey=e76721f7&s=${searchInput.value}`)
        .then(response => response.json())
        .then(data => {
            filmDisplay1.innerHTML = ``
            data.Search.forEach((filmSearchResults) => {
                fetch(`https://www.omdbapi.com/?apikey=e76721f7&t=${filmSearchResults.Title}`)
                    .then(response => response.json())
                    .then(data => {
                        movieResults.push(data)
                        render(data)
                    })
            })
        })
}

function render(data) {
    filmDisplay1.innerHTML += movieHtml(data)
}


function movieHtml(data) {
    let html = ``

    return html = `
        <div class="film-display2">
            <img src="${data.Poster}" class="poster">
                        
            <div class="three">
                <div class="one">
                    <h4 class="title">${data.Title}</h4>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <p class="rating">${data.imdbRating}</p>
                </div>
                <div class="two">
                    <p class="runtime">${data.Runtime}</p>
                    <p class="genre">${data.Genre}</p>
                    <i class="fa-solid fa-circle-plus plus-${data.imdbID} btn"  data-addbtn="${data.imdbID}"></i>
                    <i class="fa-solid fa-circle-minus minus-${data.imdbID} btn"></i>
                    <p class="watchlist">Watchlist</p>
                </div>
                <p class="plot">${data.Plot}</p>
            </div>
        </div>
        <hr/>`
}

function handleAddToWatchlist(addedmovie) {
    const movies = movieResults.filter(movie => {
        return movie.imdbID === addedmovie
    })[0]
    myFilmList.unshift(movies)
    localStorage.setItem("storedMovies", JSON.stringify(myFilmList))
    document.querySelector(`.minus-${movies.imdbID}`).style.display = 'block'
    document.querySelector(`.plus-${movies.imdbID}`).style.display = 'none'
}

export { searchFilm, handleAddToWatchlist }