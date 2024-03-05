import { Router } from "express";
import { Signup } from "../controllers/AuthController.js";

const router = Router()
router.post("/signup", Signup);

export default router;
