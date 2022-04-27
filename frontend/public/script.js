console.log(movies);

const moviesCardComponent = function(title, sub, text) {

    return `
        <div class="card">
        <div class="movieTitle">${title}</div>
        <div class="movieSub">${sub}</div>
        <div class="movieText">${text}</div>
        </div>
    `
}

const movieTitleComponent = `
    <h1>Movies</h1>
`

const loadEvent = function () {
    const rootElement = document.getElementById("root");
    console.log(rootElement);
    rootElement.insertAdjacentHTML( "beforeend" , movieTitleComponent);

    console.log(movies.id);
    console.log(movies.logo);

    for (const movie of movies.cards) {
        console.log(movie);
    
        rootElement.insertAdjacentHTML("beforeend", moviesCardComponent(movie.title, movie.sub, movie.text))

    }

}

window.addEventListener("load", loadEvent)

