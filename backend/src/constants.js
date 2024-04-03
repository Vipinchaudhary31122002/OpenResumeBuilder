import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

console.log("DEVELOPMENT_PORT:", process.env.DEVELOPMENT_PORT);
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("MONGODB_URL:", process.env.MONGODB_URL);
console.log("SECRET_TOKEN_KEY:", process.env.SECRET_TOKEN_KEY);
export const DEVELOPMENT_PORT = process.env.DEVELOPMENT_PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const MONGODB_URL = process.env.MONGODB_URL;
export const SECRET_TOKEN_KEY = process.env.SECRET_TOKEN_KEY;
