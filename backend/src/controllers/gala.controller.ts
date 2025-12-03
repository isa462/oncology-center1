import { Request, Response } from "express";
import Gala from "../models/Gala";


export const createGala = async (req: Request, res: Response) => {
// Запрос приходит как multipart/form-data: поле data (json) и поле file
const data = req.body.data ? JSON.parse(req.body.data) : req.body;
if (req.file) data.checkFile = `/uploads/${req.file.filename}`;
const saved = await Gala.create(data);
res.json(saved);
};


export const getGala = async (req: Request, res: Response) => {
const page = Number(req.query.page) || 1;
const limit = 10;
const skip = (page - 1) * limit;
}