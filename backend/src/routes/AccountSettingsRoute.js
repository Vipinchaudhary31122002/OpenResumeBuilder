import { Router } from "express";
import { userVerification } from "../middlewares/AuthMiddleware.js";
import {
  EmailChange,
  PasswordChange,
  DeleteAccount,
} from "../controllers/AccountSettingsController.js";

const router = Router();
router.route("/emailchange").post(userVerification, EmailChange);
router.route("/passwordchange").post(userVerification, PasswordChange);
router.route("/deleteaccount").delete(userVerification, DeleteAccount);

export default router;
