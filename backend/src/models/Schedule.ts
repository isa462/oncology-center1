import mongoose from "mongoose";
const S = new mongoose.Schema({ title: String, file: String, createdAt:{type:Date, default:Date.now} });
export default mongoose.model("Schedule", S);