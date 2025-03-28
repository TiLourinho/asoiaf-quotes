import { StatusCodes } from "http-status-codes";

import db from "../database/connection.js";
import { errorHandler } from "../utils/tools.js";

export async function getRandom() {
  const query = `
    SELECT * FROM quotes
    ORDER BY random()
    LIMIT 1;`;
  const quote = (await db.query(query)).rows[0];

  if (!quote) {
    const message = "No quotes available";
    throw errorHandler(StatusCodes.NOT_FOUND, message);
  }

  return quote;
}

export async function getById(id) {
  const query = "SELECT * FROM quotes WHERE id = $1";
  const quote = (await db.query(query, [id])).rows[0];

  if (!quote) {
    const message = "Quote not found";
    throw errorHandler(StatusCodes.NOT_FOUND, message);
  }

  return quote;
}

export async function getRandomByCharacter(character) {
  const query = `
    SELECT * FROM quotes
    WHERE character = $1
    ORDER BY random()
    LIMIT 1`;
  const quote = (await db.query(query, [character])).rows[0];

  if (!quote) {
    const message = `No quotes found for ${character}`;
    throw errorHandler(StatusCodes.NOT_FOUND, message);
  }

  return quote;
}

export async function create({ character, quote }) {
  const query = `
    INSERT INTO quotes (character, quote)
    VALUES ($1, $2)
    RETURNING *`;
  const createdQuote = (await db.query(query, [character, quote])).rows[0];

  if (!createdQuote) {
    const message = "Failed to create quote";
    throw errorHandler(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  return createdQuote;
}

export async function update({ id, character, quote }) {
  const query = `
    UPDATE quotes SET character = $1, quote = $2
    WHERE id = $3 RETURNING *`;
  const updatedQuote = (await db.query(query, [character, quote, id])).rows[0];

  if (!updatedQuote) {
    const message = "Quote not found or update failed";
    throw errorHandler(StatusCodes.NOT_FOUND, message);
  }

  return updatedQuote;
}

export async function checkExistence(quote) {
  const query = `
    SELECT id FROM quotes
    WHERE quote ILIKE $1
    LIMIT 1`;
  const checkedQuote = (await db.query(query, [quote.trim()])).rows[0];

  return checkedQuote || null;
}

export async function remove(id) {
  const query = `DELETE FROM quotes WHERE id = $1 RETURNING *`;
  const removedQuote = (await db.query(query, [id])).rows[0];

  if (!removedQuote) {
    const message = "Quote not found or already removed";
    throw errorHandler(StatusCodes.NOT_FOUND, message);
  }

  return removedQuote;
}
