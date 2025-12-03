import { Request, Response } from "express";

export const registerParticipant = async (req: Request, res: Response) => {
  try {
    const { name, email, company, phone } = req.body;

    // Здесь вы можете добавить логику для сохранения данных участника в базу данных
    // Например, с использованием Mongoose модели Participant
    console.log("Received participant data:", { name, email, company, phone });

    // ✅ Валидация входных данных
    if (!name || !email || !company || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // В данный момент просто возвращаем успешный ответ
    res.status(200).json({ message: "Participant registered successfully", participant: { name, email, company, phone } });
  } catch (error: any) {
    console.error("Error registering participant:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



