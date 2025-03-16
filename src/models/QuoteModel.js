import { readQuotes } from "../utils/tools.js";

export function getRandom() {
  const quotes = readQuotes();

  if (!quotes || quotes.length === 0) {
    throw new Error("No quotes available");
  }

  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
