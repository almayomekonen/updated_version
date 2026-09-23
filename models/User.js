import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 60,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      select: false,
    },
    googleId: {
      type: String,
      index: true,
    },
  },
  { timestamps: true },
);

console.log(userSchema);

export default mongoose.models.User || mongoose.model("User", userSchema);