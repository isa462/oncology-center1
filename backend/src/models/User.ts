// backend/src/models/User.ts
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
email: { type: String, required: true, unique: true },
passwordHash: { type: String, required: true },
role: { type: String, default: "admin" }
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

// export default mongoose.model("User", UserSchema);