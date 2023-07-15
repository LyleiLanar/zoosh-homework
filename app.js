import express from "express";
import { movieRoutes } from "./route/movieRouter.js";
const app = new express();

app.use("/movie", movieRoutes);

app.listen(666);
