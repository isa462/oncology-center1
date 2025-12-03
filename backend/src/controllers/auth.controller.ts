//  backend/src/controllers/auth.controller.ts 
import { Request, Response } from "express";
import {User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();



export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // ✅ Валидация входных данных
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = new User({ email, passwordHash: hash });

    await user.save();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};




// export const login = async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ error: "User not found" });
//   const ok = await bcrypt.compare(password, user.passwordHash);
//   if (!ok) return res.status(400).json({ error: "Wrong password" });
//   const token = jwt.sign(
//     { id: user._id, email: user.email, role: user.role },
//     process.env.JWT_SECRET || "",
//     { expiresIn: '7d' }
//   );
//   if (!process.env.JWT_SECRET) return res.status(500).json({ error: "JWT secret not set" });

//   res.json({ token, user: { email: user.email, role: user.role } });
// };
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // ✅ Валидация входных данных
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(400).json({ error: "Wrong password" });

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ error: "JWT secret not set" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user: { email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


