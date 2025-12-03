// backend/controllers/schedule.controller.ts
import { Request, Response } from "express";
import Schedule from "../models/Schedule";

// Расширяем Request, чтобы у него был req.file (multer)
declare global {
  namespace Express {
    interface Request {
      file?: Express.Multer.File;
    }
  }
}

export const getSchedules = async (req: Request, res: Response): Promise<void> => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (e) {
    res.status(500).json({ message: "Error loading schedules" });
  }
};

export const createSchedule = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title } = req.body as { title: string }; // типизируем body
    if (!req.file) {
      res.status(400).json({ message: "File is required" });
      return;
    }

    const schedule = new Schedule({
      title,
      fileUrl: `/uploads/${req.file.filename}`,
    });

    await schedule.save();
    res.json(schedule);
  } catch (e) {
    res.status(500).json({ message: "Error creating schedule" });
  }
};

export const deleteSchedule = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as { id: string }; // типизируем params
    await Schedule.findByIdAndDelete(id);
    res.json({ message: "Schedule deleted" });
  } catch (e) {
    res.status(500).json({ message: "Delete error" });
  }
};
