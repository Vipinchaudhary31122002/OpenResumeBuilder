import { Router } from "express";
const router = Router();

if (process.env.NODE_ENV === "production") {
  // router.use(express.static(path.join(__dirname, "../frontend/dist")));
  // router.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  // });
  router.get("/", (req, res) => {
    res.send("react is being server in the production");
  });
} else {
  router.get("/", (req, res) => {
    res.send("server is working");
  });
}

export default router;
