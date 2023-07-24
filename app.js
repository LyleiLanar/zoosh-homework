import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema.js";
import router from "./graphql/router.js";
import * as path from "./utils/pathResolve.js";

const app = new express();
app.set("view engine", "ejs");
app.set("views", path.resolve(["views"]));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: router,
    graphiql: true,
  })
);

app.use("", (req, res) => {
  res.render("404", { title: "Page not found - 404" });
});

console.log("Server running at http://localhost:666/");

app.listen(666);
