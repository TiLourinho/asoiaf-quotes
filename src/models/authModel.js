import { API_PASSWORD } from "../config/constants.js";

export function login(password) {
  return API_PASSWORD === password;
}
