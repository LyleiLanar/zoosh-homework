import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema.js";
import router from "./resolver/router.js";

const app = new express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: router,
    graphiql: true,
  })
);

console.log("Server running at http://localhost:666/graphql");

app.listen(666);
