import * as Movie from "../../services/movieService.js";

export const sayHello = () => {
  return "Hello world!";
};

export const getFirstPopularMovie = async () => {
  return await Movie.getFirstPopularMovie();
};

export const searchMovie = async (params) => {
  // console.log(await Movie.searchMovies(params));
  return await Movie.searchMovies(params);
};
