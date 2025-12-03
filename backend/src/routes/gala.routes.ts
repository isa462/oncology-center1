import express from "express";
import { createGala, getGala } from "../controllers/gala.controller";
import { upload } from "../proxy/upload.proxy"

const router = express.Router();

router.get("/", getGala);
router.post("/", upload.single("check"), createGala);

export default router;
