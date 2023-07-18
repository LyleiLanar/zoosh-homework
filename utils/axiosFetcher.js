import axios from "axios";

export const axiosFetcher = async ({ operationName, query, variables }) => {
  return (
    await axios({
      url: "https://tmdb.sandbox.zoosh.ie/dev/graphql",
      method: "post",
      headers: {
        "content-type": "application/json",
        // "Authorization": "<token>"
      },
      data: {
        operationName: operationName,
        query: query,
        variables: variables,
      },
    })
  ).data.data;
};
