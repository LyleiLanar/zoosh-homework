import express from "express";
import { getMovie } from "../controller/movieControllers.js";

export const movieRoutes = express.Router();

movieRoutes.get("/", getMovie);
