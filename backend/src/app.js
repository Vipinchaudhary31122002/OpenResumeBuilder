import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// importing routes
import AuthRoute from "./routes/AuthRoute.js";
import ResumeRoute from "./routes/ResumeRoute.js";
import AccountSettingsRoute from "./routes/AccountSettingsRoute.js"

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true, limit: "16kb" }));
app.use(bodyParser.json({ limit: "16kb" }));
app.use(cookieParser());

// routes declaration
app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/resume", ResumeRoute);
app.use("/api/v1/account", AccountSettingsRoute);

export default app;
