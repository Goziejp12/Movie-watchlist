const searchBtn = document.getElementById('search-btn')
const filmIcon = document.querySelector('.film-icon')
const searchInput = document.querySelector('.search-input')
const filmDisplay1 = document.querySelector('.film-display1')

searchBtn.addEventListener('click', searchFilm)

function searchFilm(e) {
    e.preventDefault()
    filmIcon.style.display = 'none'
    fetch(`https://www.omdbapi.com/?apikey=e76721f7&s=${searchInput.value}`)
        .then(response => response.json())
        .then(data => {
            data.Search.slice(0, 5).forEach((filmSearchResults) => {
                fetch(`https://www.omdbapi.com/?apikey=e76721f7&t=${filmSearchResults.Title}`)
                    .then(response => response.json())
                    .then(data => {
                        filmDisplay1.innerHTML += renderHtml(data)
                    })
            })
        })
    searchInput.value = ''
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
                    
                </div>
                <p class="plot">${data.Plot}</p>
            </div>
        </div>
        <hr />
            `
}