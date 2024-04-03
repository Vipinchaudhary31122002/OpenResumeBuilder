import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser());

// importing routes
// import AuthRoute from "./routes/AuthRoute.js";
import FrontendRouter from "./routes/FrontendRoute.js";

// routes declaration
app.use("/", FrontendRouter);
// app.use("/api/v1/auth", AuthRoute);

export default app;
