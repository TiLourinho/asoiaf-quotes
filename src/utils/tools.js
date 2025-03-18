import { readFileSync } from "fs";

import { QUOTES_PATH } from "../config/constants.js";

export function serverStart(error, port) {
  if (error) console.log(`Error in server setup => ${error}`);
  console.log(`Server is up and listening on port ${port}`);
}

export function readQuotes() {
  const quotes = readFileSync(QUOTES_PATH, "utf-8");
  return JSON.parse(quotes);
}

export function getQuotes() {
  const quotes = readQuotes();

  if (!quotes || quotes.length === 0) {
    throw new Error("No quotes available.");
  }

  return quotes;
}

export function getRandomNumber(limit) {
  const randomNumber = Math.random() * limit.length;

  return Math.floor(randomNumber);
}
