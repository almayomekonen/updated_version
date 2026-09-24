import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    items: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

export default mongoose.models.Conversation ||
  mongoose.model("Conversation", conversationSchema);
