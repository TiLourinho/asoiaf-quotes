import * as QuoteService from "../services/QuoteService.js";
import { StatusCodes } from "http-status-codes";

export async function getRandom(_req, res) {
  try {
    const quote = await QuoteService.getRandom();

    return res.status(StatusCodes.OK).json(quote);
  } catch ({ message }) {
    const error = { error: message };

    console.error(`Error in getRandom => ${message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function getById(req, res) {
  const id = Number(req.params.id);

  try {
    const quote = await QuoteService.getById(id);

    return res.status(StatusCodes.OK).json(quote);
  } catch ({ message }) {
    const error = { error: message };

    console.error(`Error in getById => ${message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function getByCharacter(req, res) {
  const { character } = req.query;

  try {
    const quote = await QuoteService.getByCharacter(character);

    return res.status(StatusCodes.OK).json(quote);
  } catch ({ message }) {
    const error = { error: message };

    console.error(`Error in getByCharacter => ${message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function create(req, res) {
  const quote = req.body;

  try {
    const newQuote = await QuoteService.create(quote);

    return res.status(StatusCodes.CREATED).json(newQuote);
  } catch ({ message }) {
    const error = { error: message };

    console.error(`Error in create => ${message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function update(req, res) {
  const id = Number(req.params.id);
  const { character, quote } = req.body;
  const newQuote = { id, character, quote };

  try {
    const updatedQuote = await QuoteService.update(newQuote);

    return res.status(StatusCodes.OK).json(updatedQuote);
  } catch ({ message }) {
    const error = { error: message };

    console.error(`Error in update => ${message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function remove(req, res) {
  const id = Number(req.params.id);

  try {
    const quote = await QuoteService.remove(id);

    return res.status(StatusCodes.OK).json(quote);
  } catch ({ message }) {
    const error = { error: message };

    console.error(`Error in remove => ${message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}
