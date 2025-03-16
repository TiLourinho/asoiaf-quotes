import * as QuoteModel from "../models/QuoteModel.js";

export function getRandom() {
  const quote = QuoteModel.getRandom();

  if (!quote) {
    throw new Error("Error fetching quote. Please try again later.");
  }

  return quote;
}
