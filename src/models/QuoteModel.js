import db from "../database/connection.js";
import {
  readQuotes,
  getRandomNumber,
  saveQuotes,
  updateQuotes,
  removeQuotes,
} from "../utils/tools.js";

async function getAllQuotes() {
  const query = "SELECT * FROM quotes";
  const quotes = (await db.query(query)).rows;

  return quotes;
}

export async function getRandom() {
  const quotes = await getAllQuotes();

  if (!quotes || quotes.length === 0) {
    throw new Error("No quotes available.");
  }

  return quotes[getRandomNumber(quotes)];
}

export async function getById(id) {
  const quotes = await getAllQuotes();
  const findById = quotes.find((quote) => quote.id === id);

  if (!findById) {
    throw new Error("Quote not found!");
  }

  return findById;
}

export async function getByCharacter(character) {
  const quotes = await getAllQuotes();
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

export function update({ id, character, quote }) {
  const updatedQuote = { id, character, quote };
  const existingQuote = getById(id);

  if (!existingQuote) {
    throw new Error("Quote not found!");
  }

  try {
    updateQuotes(updatedQuote);

    return updatedQuote;
  } catch ({ message }) {
    console.error(`Error trying to update a quote => ${message}`);
  }
}

export function remove(id) {
  const quote = getById(id);

  if (!quote) {
    throw new Error("Quote not found!");
  }

  try {
    removeQuotes(id);

    return quote;
  } catch ({ message }) {
    console.error(`Error trying to remove a quote => ${message}`);
  }
}
