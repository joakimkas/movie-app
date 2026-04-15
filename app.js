"use strict";

console.log("Movie App starter...");

const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Goat Movie", "Goat Movie 2", "Horse Movie 7"];

const movieList = document.querySelector("#movie-list");
console.log(movieList);

for (const movie of movies) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie}</h3>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}