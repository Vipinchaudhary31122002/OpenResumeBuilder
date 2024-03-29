import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const MONGODB_URL = process.env.MONGODB_URL;
export const SECRET_TOKEN_KEY = process.env.SECRET_TOKEN_KEY;
