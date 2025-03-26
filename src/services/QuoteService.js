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

export function create(quote) {
  const newQuote = QuoteModel.create(quote);

  if (!newQuote) {
    throw new Error("Error writing quote. Please try again later.");
  }

  return newQuote;
}

export function update(quote) {
  const updatedQuote = QuoteModel.update(quote);

  if (!updatedQuote) {
    throw new Error("Error writing quote. Please try again later.");
  }

  return updatedQuote;
}

export function remove(id) {
  const quote = QuoteModel.remove(id);

  if (!quote) {
    throw new Error("Error writing quote. Please try again later.");
  }

  return quote;
}
