import * as QuoteService from "../services/QuoteService.js";
import { StatusCodes } from "http-status-codes";

export function getRandom(_req, res) {
  try {
    const quote = QuoteService.getRandom();

    return res.status(StatusCodes.OK).json(quote);
  } catch ({ message }) {
    const error = { error: message };

    console.error(`Error in getRandom => ${message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export function getById(req, res) {
  const id = Number(req.params.id);

  try {
    const quote = QuoteService.getById(id);

    return res.status(StatusCodes.OK).json(quote);
  } catch ({ message }) {
    const error = { error: message };

    console.error(`Error in getById => ${message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export function getByCharacter(req, res) {
  const { character } = req.query;

  try {
    const quote = QuoteService.getByCharacter(character);

    return res.status(StatusCodes.OK).json(quote);
  } catch ({ message }) {
    const error = { error: message };

    console.error(`Error in getByCharacter => ${message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}
