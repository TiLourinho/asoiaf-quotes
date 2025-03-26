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

async function checkQuote(id) {
  const existingQuote = await getById(id);

  if (existingQuote) {
    return false;
  }

  return true;
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

export async function create({ character, quote }) {
  const query = `INSERT INTO quotes (character, quote)
    VALUES ($1, $2) RETURNING id, character, quote`;
  const newQuote = (await db.query(query, [character, quote])).rows[0];

  if (!newQuote) {
    throw new Error("Quote could not be created!");
  }

  return newQuote;
}

export async function update({ id, character, quote }) {
  const query = `UPDATE quotes SET character = $1, quote = $2
    WHERE id = $3 RETURNING id, character, quote`;

  if (await checkQuote(id)) {
    throw new Error("Quote not found!");
  }

  const updatedQuote = (await db.query(query, [character, quote, id])).rows[0];

  if (!updatedQuote) {
    throw new Error("Quote could not be updated!");
  }

  return updatedQuote;
}

export async function remove(id) {
  const query = `DELETE FROM quotes WHERE id = $1
    RETURNING id, character, quote`;

  if (await checkQuote(id)) {
    throw new Error("Quote not found!");
  }

  const removedQuote = (await db.query(query, [id])).rows[0];

  if (!removedQuote) {
    throw new Error("Quote could not be removed!");
  }

  return removedQuote;
}
