import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

import * as authModel from "../models/authModel.js";
import { errorHandler } from "../utils/tools.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/constants.js";

export function login(password) {
  const isValid = authModel.login(password);

  if (!isValid) {
    const message = "Invalid password";
    throw errorHandler(StatusCodes.UNAUTHORIZED, message);
  }

  const config = { expiresIn: JWT_EXPIRES_IN };
  const token = jwt.sign({}, JWT_SECRET, config);

  return token;
}
