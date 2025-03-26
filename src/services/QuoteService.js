import * as QuoteModel from "../models/QuoteModel.js";

export async function getRandom() {
  const quote = await QuoteModel.getRandom();

  if (!quote) {
    throw new Error("Error fetching quote. Please try again later.");
  }

  return quote;
}

export async function getById(id) {
  const quote = await QuoteModel.getById(id);

  if (!quote) {
    throw new Error("Error fetching quote. Please try again later.");
  }

  return quote;
}

export async function getByCharacter(character) {
  const quote = await QuoteModel.getByCharacter(character);

  if (!quote) {
    throw new Error("Error fetching quote. Please try again later.");
  }

  return quote;
}

export async function create(quote) {
  const newQuote = await QuoteModel.create(quote);

  if (!newQuote) {
    throw new Error("Error writing quote. Please try again later.");
  }

  return newQuote;
}

export async function update(quote) {
  const updatedQuote = await QuoteModel.update(quote);

  if (!updatedQuote) {
    throw new Error("Error writing quote. Please try again later.");
  }

  return updatedQuote;
}

export async function remove(id) {
  const removedQuote = await QuoteModel.remove(id);

  if (!removedQuote) {
    throw new Error("Error writing quote. Please try again later.");
  }

  return removedQuote;
}
