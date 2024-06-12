import { Router } from "express";
import { CreateResume, UserResumes, DeleteResume } from "../controllers/ResumeController.js";
import { userVerification } from "../middlewares/AuthMiddleware.js";
const router = Router();

router.route("/userresumes").get(userVerification, UserResumes);
router.route("/createresume").post(userVerification, CreateResume);
router.route("/deleteresume/:id").delete(userVerification, DeleteResume);
export default router;
