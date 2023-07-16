import movie from "../model/movie.js";

export const hello = () => {
  return "Hello world!";
};

export const getMovies = () => {
  return movie.getMoviesByName();
};
