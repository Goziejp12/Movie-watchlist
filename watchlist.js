let myMovies = JSON.parse(localStorage.getItem("storedMovies"))
const watchlistRender = document.querySelector('.watchlist-render')


document.addEventListener('click', e => {
    if(e.target.dataset.removebtn) {
        handleRemoveClick(e.target.dataset.removebtn)
    }
    else if(e.target.id === "search-for-movie") {
        window.location.href = 'index.html'
    }
})

function handleRemoveClick(removebtn) {
    const removeFilms = myMovies.filter(films => {
        return films.imdbID === removebtn
    })[0]
    const filmIndex = myMovies.findIndex(data => {
        return data.imdbID === removebtn
    })
    myMovies.splice(filmIndex, 1)
    localStorage.setItem("storedMovies", JSON.stringify(myMovies))
    renderToWatchlist()
}

function watchlistHtml() {
    let html = ``
    
    myMovies.forEach(films => {
        html += `
            <div class="film-display2">
                <img src="${films.Poster}" class="poster">
                            
                <div class="three">
                    <div class="one">
                        <h4 class="title">${films.Title}</h4>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <p class="rating">${films.imdbRating}</p>
                    </div>
                    <div class="two">
                        <p class="runtime">${films.Runtime}</p>
                        <p class="genre">${films.Genre}</p>
                        <i class="fa-solid fa-circle-minus btn" id="minus-watchlist" data-removebtn="${films.imdbID}"></i>
                        <p class="watchlist">Watchlist</p>
                    </div>
                    <p class="plot">${films.Plot}</p>
                </div>
            </div>
            <hr/>
                    `
    })
    return html
}

function renderToWatchlist() {
    watchlistRender.innerHTML = watchlistHtml()
}

renderToWatchlist()