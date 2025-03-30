import express from "express";

import * as quoteController from "../controllers/quoteController.js";
import {
  validateParams,
  validateQuery,
  validateBody,
} from "../middlewares/validation.js";
import { authUser } from "../middlewares/auth.js";

export const quoteRouter = express.Router();

quoteRouter.get("/random", quoteController.getRandom);
quoteRouter.get("/:id", validateParams, quoteController.getById);
quoteRouter.get("/", validateQuery, quoteController.getRandomByCharacter);
quoteRouter.post("/", authUser, validateBody, quoteController.create);
quoteRouter.put("/:id", authUser, validateParams, quoteController.update);
quoteRouter.delete("/:id", authUser, validateParams, quoteController.remove);
