import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

import { JWT_SECRET } from "../config/constants.js";

export function authUser(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    const message = { error: "Token not provided" };
    return res.status(StatusCodes.UNAUTHORIZED).json(message);
  }

  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    const message = { error: "Invalid or expired token" };
    res.status(StatusCodes.FORBIDDEN).json(message);
  }
}
