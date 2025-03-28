import express from "express";

import * as quoteController from "../controllers/quoteController.js";

export const quoteRouter = express.Router();

quoteRouter.get("/random", quoteController.getRandom);
quoteRouter.get("/:id", quoteController.getById);
quoteRouter.get("/", quoteController.getRandomByCharacter);
quoteRouter.post("/", quoteController.create);
quoteRouter.put("/:id", quoteController.update);
quoteRouter.delete("/:id", quoteController.remove);
