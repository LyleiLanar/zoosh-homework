import {
  sayHello,
  getFirstPopularMovie,
  searchMovie,
} from "./resolver/movieResolver.js";

const router = {
  hello: sayHello,
  getFirstPopularMovie: getFirstPopularMovie,
  searchMovie: searchMovie,
};

export default router;
