import {
  sayHello,
  getFirstPopularMovie,
  searchMovie,
} from "./movieResolver.js";

const router = {
  hello: sayHello,
  getFirstPopularMovie: getFirstPopularMovie,
  searchMovie: searchMovie,
};

export default router;
