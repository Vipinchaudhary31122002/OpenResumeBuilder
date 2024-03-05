import { Router } from "express";
import express from "express";
import path from "path";

const router = Router();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

if (process.env.NODE_ENV === "production") {
  router.use(express.static(path.join(__dirname, "../../../frontend/dist")));
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../frontend/dist/index.html"));
  });
} else {
  router.get("/", (req, res) => {
    res.send("server is working");
  });
}

export default router;
