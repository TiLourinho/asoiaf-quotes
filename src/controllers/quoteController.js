import { StatusCodes } from "http-status-codes";

import * as quoteService from "../services/quoteService.js";

export async function getRandom(_req, res, next) {
  try {
    const quote = await quoteService.getRandom();

    return res.status(StatusCodes.OK).json(quote);
  } catch (error) {
    console.error(`Error in getRandom => ${error.message}`);
    next(error);
  }
}

export async function getById(req, res, next) {
  const id = Number(req.params.id);

  try {
    const quote = await quoteService.getById(id);

    return res.status(StatusCodes.OK).json(quote);
  } catch (error) {
    console.error(`Error in getById => ${error.message}`);
    next(error);
  }
}

export async function getRandomByCharacter(req, res, next) {
  const { character } = req.query;

  try {
    const quote = await quoteService.getRandomByCharacter(character);

    return res.status(StatusCodes.OK).json(quote);
  } catch (error) {
    console.error(`Error in getRandomByCharacter => ${error.message}`);
    next(error);
  }
}

export async function create(req, res, next) {
  const quote = req.body;

  try {
    const createdQuote = await quoteService.create(quote);

    return res.status(StatusCodes.CREATED).json(createdQuote);
  } catch (error) {
    console.error(`Error in create => ${error.message}`);
    next(error);
  }
}

export async function update(req, res, next) {
  const id = Number(req.params.id);
  const { character, quote } = req.body;
  const quoteToUpdate = { id, character, quote };

  try {
    const updatedQuote = await quoteService.update(quoteToUpdate);

    return res.status(StatusCodes.OK).json(updatedQuote);
  } catch (error) {
    console.error(`Error in update => ${error.message}`);
    next(error);
  }
}

export async function remove(req, res, next) {
  const id = Number(req.params.id);

  try {
    const removedQuote = await quoteService.remove(id);

    return res.status(StatusCodes.OK).json(removedQuote);
  } catch (error) {
    console.error(`Error in remove => ${error.message}`);
    next(error);
  }
}
