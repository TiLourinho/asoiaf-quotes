import {
  readQuotes,
  getQuotes,
  getRandomNumber,
  saveQuotes,
} from "../utils/tools.js";

export function getRandom() {
  const quotes = getQuotes();

  return quotes[getRandomNumber(quotes)];
}

export function getById(id) {
  const quotes = getQuotes();
  const findById = quotes.find((quote) => quote.id === id);

  if (!findById) {
    throw new Error("Quote not found!");
  }

  return findById;
}

export function getByCharacter(character) {
  const quotes = getQuotes();
  const findByCharacter = quotes.filter(
    (quote) => quote.character === character
  );

  if (!findByCharacter) {
    throw new Error("Quote not found!");
  }

  return findByCharacter[getRandomNumber(findByCharacter)];
}

export function create({ character, quote }) {
  const id = readQuotes().length + 1;
  const newQuote = { id, character, quote };

  try {
    saveQuotes(newQuote);

    return newQuote;
  } catch ({ message }) {
    console.error(`Error trying to create a quote => ${message}`);
  }
}
