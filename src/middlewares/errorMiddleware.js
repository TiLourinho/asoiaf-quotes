import { StatusCodes } from "http-status-codes";

function errorMiddleware(err, _req, res, _next) {
  if (err.status) {
    const error = { message: err.message };
    return res.status(err.status).json(error);
  }
  const error = { message: "Internal Server Error" };
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
}

export default errorMiddleware;
