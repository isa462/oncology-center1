import mongoose from "mongoose";


const S = new mongoose.Schema({
name: String,
email: String,
company: String,
phone: String,
checkFile: String, // путь к загруженному чеку
createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Gala", S);