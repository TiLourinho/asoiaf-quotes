import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const API_PASSWORD = process.env.API_PASSWORD;

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = "1h";
