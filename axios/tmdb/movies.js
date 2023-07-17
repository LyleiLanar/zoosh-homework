import axios from "axios";

export const fetchPopular = async () => {
  const endpoint = "https://tmdb.sandbox.zoosh.ie/dev/graphql";
  const headers = {
    "content-type": "application/json",
    // "Authorization": "<token>"
  };

  const graphqlQuery = {
    operationName: "fetchPopular",
    query: `query fetchPopular {
        movies: popularMovies {
          id
          name
          genres {
            name
          }
          score
        }
      }`,
    variables: {},
  };

  return (
    await axios({
      url: endpoint,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    })
  ).data.data.movies[0];
};
