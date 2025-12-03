import mongoose from "mongoose";


const S = new mongoose.Schema({
name: String,
email: String,
company: String,
phone: String,
thesisFile: String, // путь к файлу тезиса
createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Thesis", S);