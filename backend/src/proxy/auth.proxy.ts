// / backend/src/proxy/auth.proxy.ts 
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export interface AuthRequest extends Request { user?: any }


export const authProxy = (req: AuthRequest, res: Response, next: NextFunction) => {
const authHeader = req.headers.authorization;
if (!authHeader || !authHeader.startsWith("Bearer ")) {
  return res.status(401).json({ error: "No token or bad format" });
}
const token = authHeader.split(" ")[1];

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET not set");
  return res.status(500).json({ error: "Internal server error" });
}

try {
const payload = jwt.verify(token, process.env.JWT_SECRET || "");
req.user = payload;
next();
} catch (e) {
return res.status(401).json({ error: "Invalid token" });
}
};