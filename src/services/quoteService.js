import { StatusCodes } from "http-status-codes";

import * as quoteModel from "../models/quoteModel.js";
import { errorHandler } from "../utils/tools.js";

export async function getRandom() {
  const quote = await quoteModel.getRandom();

  if (!quote) {
    const message = "Error fetching quote. Please try again later";
    throw errorHandler(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  return quote;
}

export async function getById(id) {
  const quote = await quoteModel.getById(id);

  if (!quote) {
    const message = "Error fetching quote. Please try again later";
    throw errorHandler(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  return quote;
}

export async function getRandomByCharacter(character) {
  const quote = await quoteModel.getRandomByCharacter(character);

  if (!quote) {
    const message = "Error fetching quote. Please try again later";
    throw errorHandler(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  return quote;
}

export async function create(quote) {
  const text = quote.quote;
  const normalizedQuote = text.trim().toLowerCase();
  const existingQuote = await quoteModel.checkExistence(`%${normalizedQuote}%`);

  if (existingQuote) {
    const message = "This quote already exists in the database";
    console.log(`Duplicated quote => ${existingQuote}`);
    throw errorHandler(StatusCodes.CONFLICT, message);
  }

  const createdQuote = await quoteModel.create(quote);

  if (!createdQuote) {
    const message = "Error creating quote. Please try again later";
    throw errorHandler(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  return createdQuote;
}

export async function update(quote) {
  const text = quote.quote;
  const normalizedQuote = text.trim().toLowerCase();
  const existingQuote = await quoteModel.checkExistence(`%${normalizedQuote}%`);

  if (existingQuote) {
    const message = "This quote already exists in the database";
    console.log(`Duplicated quote => ${existingQuote.id}`);
    throw errorHandler(StatusCodes.CONFLICT, message);
  }

  const updatedQuote = await quoteModel.update(quote);

  if (!updatedQuote) {
    const message = "Error updating quote. Please try again later";
    throw errorHandler(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  return updatedQuote;
}

export async function remove(id) {
  const removedQuote = await quoteModel.remove(id);

  if (!removedQuote) {
    const message = "Error removing quote. Please try again later";
    throw errorHandler(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  return removedQuote;
}
