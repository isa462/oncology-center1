// backend/server.ts
// backend/server.ts
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.routes";
import participantRoutes from "./routes/participant.routes";
import galaRoutes from "./routes/gala.routes";
import thesisRoutes from "./routes/thesis.routes";
import scheduleRoutes from "./routes/schedule.routes";
import { connectDB } from "./config/db";

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

// Статические файлы (например, загрузки)
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Подключаем роуты
app.use("/api/auth", authRoutes);
app.use("/api/participants", participantRoutes);
app.use("/api/gala", galaRoutes);
app.use("/api/thesis", thesisRoutes);
app.use("/api/schedule", scheduleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));


