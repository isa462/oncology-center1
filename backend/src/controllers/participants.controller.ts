import { Request, Response } from "express";
import Participant from "../models/Participant";


export const createParticipant = async (req: Request, res: Response) => {
const saved = await Participant.create(req.body);
res.json(saved);
};


export const getParticipants = async (req: Request, res: Response) => {
const page = Number(req.query.page) || 1;
const limit = 10;
const skip = (page - 1) * limit;
const total = await Participant.countDocuments();
const items = await Participant.find().skip(skip).limit(limit);
res.json({ items, total, page });
};


export const deleteParticipant = async (req: Request, res: Response) => {
await Participant.findByIdAndDelete(req.params.id);
res.json({ success: true });
};