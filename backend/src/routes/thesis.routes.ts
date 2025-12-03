import express from "express";
import { createThesis, getTheses, deleteThesis } from "../controllers/thesis.controller";
import { upload } from "../proxy/upload.proxy";

const router = express.Router();

router.get("/", getTheses);
router.post("/", upload.single("file"), createThesis);
router.delete("/:id", deleteThesis);

export default router;
