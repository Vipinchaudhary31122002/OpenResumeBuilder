import { Router } from "express";
import { Signup, Login, Logout } from "../controllers/AuthController.js";
import { userVerification } from "../middlewares/AuthMiddleware.js";

const router = Router();
router.route("/signup").post(Signup);
router.route("/login").post(Login);
router.route("/logout").get(userVerification, Logout);

export default router;
