import { SECRET_TOKEN_KEY } from "../constants.js";
import jwt from "jsonwebtoken";

export const createSecretToken = (id) => {
  return jwt.sign({ id }, SECRET_TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
