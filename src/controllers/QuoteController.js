import * as QuoteService from "../services/QuoteService.js";
import { StatusCodes } from "http-status-codes";

export function getRandom(_req, res) {
  try {
    const quote = QuoteService.getRandom();

    return res.status(StatusCodes.OK).json(quote);
  } catch (error) {
    const message = { error: error.message };

    console.error(`Error in getRandom => ${error}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(message);
  }
}
