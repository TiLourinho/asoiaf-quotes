import * as QuoteController from "../controllers/QuoteController.js";
import express from "express";

export const quoteRouter = express.Router();

quoteRouter.get("/random", QuoteController.getRandom);
quoteRouter.get("/:id", QuoteController.getById);
