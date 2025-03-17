import { readQuotes } from "../utils/tools.js";

export function getRandom() {
  const quotes = readQuotes();

  if (!quotes || quotes.length === 0) {
    throw new Error("No quotes available.");
  }

  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

export function getById(id) {
  const quotes = readQuotes();

  if (!quotes || quotes.length === 0) {
    throw new Error("No quotes available.");
  }

  const findById = quotes.find((quote) => quote.id === id);

  if (!findById) {
    throw new Error("Quote not found!");
  }

  return findById;
}
