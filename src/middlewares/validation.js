import { StatusCodes } from "http-status-codes";

import {
  idParamSchema,
  querySchema,
  quoteSchema,
} from "../validations/schemas.js";

function sendErrorDetails(error, res) {
  const message = error.details[0].message;
  const details = { message: message.replaceAll(`\"`, "'") };

  return res.status(StatusCodes.BAD_REQUEST).json(details);
}

export function validateParams(req, res, next) {
  const { error } = idParamSchema.validate(req.params);

  if (error) {
    return sendErrorDetails(error, res);
  }

  next();
}

export function validateQuery(req, res, next) {
  const { error } = querySchema.validate(req.query);

  if (error) {
    return sendErrorDetails(error, res);
  }

  next();
}

export function validateBody(req, res, next) {
  const { error } = quoteSchema.validate(req.body);

  if (error) {
    return sendErrorDetails(error, res);
  }

  next();
}
