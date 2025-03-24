import * as QuoteModel from "../models/QuoteModel.js";

export function getRandom() {
  const quote = QuoteModel.getRandom();

  if (!quote) {
    throw new Error("Error fetching quote. Please try again later.");
  }

  return quote;
}

export function getById(id) {
  const quote = QuoteModel.getById(id);

  if (!quote) {
    throw new Error("Error fetching quote. Please try again later.");
  }

  return quote;
}

export function getByCharacter(character) {
  const quote = QuoteModel.getByCharacter(character);

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
