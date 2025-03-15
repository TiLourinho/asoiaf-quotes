import express from "express";
import { StatusCodes } from "http-status-codes";

import { getQuotes } from "./utils/tools.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/quotes", (_req, res) => {
  const quotes = getQuotes();

  if (!quotes) res.sendStatus(StatusCodes.NOT_FOUND);
  res.status(StatusCodes.OK).json(quotes);
});

export default app;
