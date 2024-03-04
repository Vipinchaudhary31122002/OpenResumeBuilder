import express from "express";
import cors from "cors";
// const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
// app.use(express.json({limit: "16kb"));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// app.use(cookieParser());

// importing routes
// const authRoute = require("./routes/AuthRoute");
import FrontendRouter from './routes/FrontendRoute.js'

// routes declaration
app.use("/", FrontendRouter);
// app.use("/api/v1/auth", authRoute);

export default app;
