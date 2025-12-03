//  backend/src/routes/auth.routes.ts 
import express from "express";
import { login, register } from "../controllers/auth.controller";

const router = express.Router();



router.post("/register", register);
router.post("/login", login);
router.get("/", (req, res) => {
  res.json({ message: "Auth route works" });
});

export default router;
