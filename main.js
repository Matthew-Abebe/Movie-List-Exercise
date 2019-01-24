console.log("hola mundo");

let hiWorld = document.createElement("h3");
hiWorld.textContent = "hi world";

let sayHi = document.getElementById("contentContainer")
sayHi.appendChild(hiWorld);

const myMovies = [
{
    name: "The Lizzy McGuire Movie",
    release: "2003",
    link: "https://www.imdb.com/title/tt0306841/"
},

{
    name: "Inception",
    release: "2010",
    link: "https://www.imdb.com/title/tt1375666/"
}
]

let myMovieListEl = document.getElementById("movieContainer")

myMovies.forEach(function(movie){
    console.log(movie)
    ///step1: create an element to put each string in///
    let movieNameElement = document.createElement("h2")
    let movieReleaseElement = document.createElement("p")
    let movieLinkElement = document.createElement("a")
    movieLinkElement.setAttribute("href", movie.link);
    movieLinkElement.textContent = movie.link;
    ///step2: set the text content of the element to a string///
    movieNameElement.textContent = movie.name;
    movieReleaseElement.textContent = `Released in: ${movie.release}`;
    ///step3: append element to container////
    myMovieListEl.appendChild(movieNameElement);
    myMovieListEl.appendChild(movieReleaseElement);
    myMovieListEl.appendChild(movieLinkElement);
})

///reassign value of your array to contain objects (with a name property and release date property) rather than strings



