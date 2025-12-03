// backend/controllers/thesis.controller.ts
import { Request, Response } from "express";
import Thesis from "../models/Thesis";

// Расширяем Request, чтобы у него был req.file (multer)
declare global {
  namespace Express {
    interface Request {
      file?: Express.Multer.File;
    }
  }
}

export const getTheses = async (req: Request, res: Response): Promise<void> => {
  try {
    const theses = await Thesis.find();
    res.json(theses);
  } catch (e) {
    res.status(500).json({ message: "Error loading theses" });
  }
};

export const createThesis = async (req: Request, res: Response): Promise<void> => {
  try {
    // Типизируем body
    const { name, email, company, phone } = req.body as {
      name: string;
      email: string;
      company: string;
      phone: string;
    };

    if (!req.file) {
      res.status(400).json({ message: "File is required" });
      return;
    }

    const thesis = new Thesis({
      name,
      email,
      company,
      phone,
      fileUrl: `/uploads/${req.file.filename}`,
    });

    await thesis.save();
    res.json(thesis);
  } catch (e) {
    res.status(500).json({ message: "Error creating thesis" });
  }
};

export const deleteThesis = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as { id: string }; // типизируем params
    await Thesis.findByIdAndDelete(id);
    res.json({ message: "Thesis deleted" });
  } catch (e) {
    res.status(500).json({ message: "Delete error" });
  }
};
