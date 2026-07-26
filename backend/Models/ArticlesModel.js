import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  writtenBy: { type: String, required: false },
});

export const Articles = mongoose.model("Articles", ArticleSchema);
