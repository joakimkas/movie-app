"use strict";

console.log("Movie App starter...");

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Science Fiction",
    image: "https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: "Science Fiction",
    image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genre: "Science Fiction",
    image: "https://img-cdn.sfanytime.com/COVERM/4879ca25-d6e3-48c1-a012-a3e700a022a2_COVERM_01.jpg?ar=0.692&fit=crop&fm=pjpg&w=415&s=ab15da597df0327675e36a7a6f1516ce"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Horse Movie 5",
    year: 2042,
    rating: 9.6,
    genre: "Action",
    image: "https://wildjolie.com/cdn/shop/articles/16_Most_Beautiful_Horse_in_the_World.jpg?v=1740021416"
  },
  {
    title: "Rabbit Movie",
    year: 2044,
    rating: 3.4,
    genre: "Thriller",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Oryctolagus_cuniculus_Rcdo.jpg"
  },
];

const movieList = document.querySelector("#movie-list");

function showMovies() {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const highlightClass = movie.rating > 8.5 ? "movie-card--highlight" : "";

  const html = /* html */ `
    <article class="movie-card ${highlightClass}">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Genre: ${movie.genre}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

showMovies();

movies.push({
  title: "Pulp Fiction",
  year: 1994,
  rating: 8.9,
  image: "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg"
});

showMovies();

function addMovie(movie) {
  movies.push(movie);
  showMovies();
}

addMovie({
  title: "Blade Runner 2049",
  year: 2017,
  rating: 8.0,
  image: "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_.jpg",
  genre: "Sci-fi",
});

addMovie({
  title: "Peter",
  year: 2049,
  rating: 1.2,
  image: "https://denmark.dlapiper.com/sites/default/files/styles/medium_width/public/node/field_image/Peter%20Mollerup%20_%20NY.jpg?itok=7zyLMDLc",
  genre: "Drama",
});
