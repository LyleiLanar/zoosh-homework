import { axiosFetcher } from "../utils/axiosFetcher.js";

export const getFirstPopularMovie = async () => {
  return (
    await axiosFetcher({
      operationName: "fetchPopular",
      query: `query fetchPopular {
      movies: popularMovies {
        id
        name
        genres {
          id
          name
        }
        score
      }
    }`,
      variables: {},
    })
  ).movies[0];
};

const getMovieByTitle = async (keyword) => {
  return (
    await axiosFetcher({
      operationName: "SearchMovies",
      query: `query SearchMovies {
        searchMovies(query: "${keyword}") {
          id
          name
          genres {
            id
            name
          }
          score
        }
      }`,
      variables: {},
    })
  ).searchMovies;
};

const getRelatedWikiPage = async (canonicalTitle) => {
  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${canonicalTitle}`
  );
  if (response.status === 200) {
    return await response.json();
  }
  return null;
};

const transposeTitle = (title) => {
  return title.replace(/ /g, "_");
};

export const searchMovies = async (params) => {
  console.log(params);
  let movies = await getMovieByTitle(params.keyword);

  if (params.wikiToggle) {
    movies = movies.map(async (movie) => {
      const movieWiki = await getRelatedWikiPage(transposeTitle(movie.name));
      if (movieWiki) {
        movie.wikiURL = movieWiki.content_urls.desktop.page;
        movie.description = movieWiki.extract;
      }
      return movie;
    });
  }
  return movies;
};
