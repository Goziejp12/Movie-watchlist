let movieArray = []
const filmIcon = document.querySelector('.film-icon')
const searchInput = document.querySelector('.search-input')
const filmDisplay1 = document.querySelector('.film-display1')

function searchFilm(e) {
    e.preventDefault()
    filmIcon.style.display = 'none'
    fetch(`https://www.omdbapi.com/?apikey=e76721f7&s=${searchInput.value}`)
        .then(response => response.json())
        .then(data => {
            movieArray = data
            movieArray.Search.slice(0, 5).forEach((filmSearchResults) => {
                fetch(`https://www.omdbapi.com/?apikey=e76721f7&t=${filmSearchResults.Title}&plot=short`)
                    .then(response => response.json())
                    .then(data => {
                        filmDisplay1.innerHTML += renderHtml(data)
                    })
            })
        })
}

function renderHtml(data) {
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
                    <button class="watchlist-btn" data-watchlist="${data.imdbID}">
                        <i class="fa-solid fa-circle-plus" id="addbtn" data-watchlist="${data.imdbID}"></i>
                        <i class="fa-solid fa-circle-minus" id="removebtn" data-watchlist="${data.imdbID}"></i>
                        <p class="watchlist" data-watchlist="${data.imdbID}">Watchlist</p>
                    </button>
                </div>
                <p class="plot">${data.Plot}</p>
            </div>
        </div>
        <hr />`
}

function handleAdd2Watchlist(addedmovie) {
    const added2watchlist = movieArray.Search.filter(filteredMovie => {
        return addedmovie == filteredMovie.imdbID
    })[0]
    return added2watchlist
}

export{ filmIcon, filmDisplay1, searchInput, movieArray, searchFilm, renderHtml, handleAdd2Watchlist }