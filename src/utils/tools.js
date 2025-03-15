import { readFileSync, writeFileSync } from "fs";

import { QUOTES_PATH } from "../config/constants.js";

export function serverStart(error, port) {
  if (error) console.log(`Error in server setup => ${error}`);
  console.log(`Server is up and listening on port ${port}`);
}

export function getQuotes() {
  const quotes = readFileSync(QUOTES_PATH, "utf-8");
  return JSON.parse(quotes);
}
