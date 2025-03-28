import Joi from "joi";

const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;

export const idParamSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});

export const querySchema = Joi.object({
  character: Joi.string().min(3).max(50).required().pattern(regex),
});

export const quoteSchema = Joi.object({
  character: Joi.string().min(3).max(50).required().pattern(regex),
  quote: Joi.string().min(10).max(500).required(),
});
