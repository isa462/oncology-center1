import express from "express";
import { createParticipant, getParticipants, deleteParticipant } from "../controllers/participants.controller";

const router = express.Router();

router.get("/", getParticipants);
router.post("/", createParticipant);
router.delete("/:id", deleteParticipant);

export default router;
