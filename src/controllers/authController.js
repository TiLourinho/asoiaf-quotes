import { StatusCodes } from "http-status-codes";

import * as authService from "../services/authService.js";

export function login(req, res, next) {
  const { password } = req.body;

  try {
    const token = authService.login(password);

    return res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    console.error(`Error in login => ${error.message}`);
    next(error);
  }
}
