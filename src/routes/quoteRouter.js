import * as QuoteController from "../controllers/QuoteController.js";
import express from "express";

export const quoteRouter = express.Router();

quoteRouter.get("/random", QuoteController.getRandom);
quoteRouter.get("/:id", QuoteController.getById);
quoteRouter.get("/", QuoteController.getByCharacter);
quoteRouter.post("/", QuoteController.create);
quoteRouter.put("/:id", QuoteController.update);
quoteRouter.delete("/:id", QuoteController.remove);
