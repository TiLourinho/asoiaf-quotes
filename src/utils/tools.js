import { readFileSync, writeFileSync } from "fs";

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

export function saveQuotes(quote) {
  const allQuotes = readQuotes();
  const data = [...allQuotes, quote];
  const stringfiedData = JSON.stringify(data, null, 2);

  writeFileSync(QUOTES_PATH, stringfiedData);
}

export function updateQuotes(quote) {
  const allQuotes = readQuotes();

  allQuotes.map((item) => {
    if (item.id === quote.id) {
      item.id = item.id;
      item.character = quote.character;
      item.quote = quote.quote;
    }
  });

  const data = [...allQuotes];
  const stringfiedData = JSON.stringify(data, null, 2);

  writeFileSync(QUOTES_PATH, stringfiedData);
}
