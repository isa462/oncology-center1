import express from "express";
import { upload } from "../proxy/upload.proxy";
import { getSchedules, createSchedule, deleteSchedule } from "../controllers/schedule.controller";

const router = express.Router();

router.get("/", getSchedules);
router.post("/", upload.single("file"), createSchedule);
router.delete("/:id", deleteSchedule);

export default router;
