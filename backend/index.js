import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
const db = process.env.MONGODB_URL;

try {
  await mongoose.connect(db);
  console.log("db connected");
} catch (error) {
  handleError(error);
}

import ArticleRouter from "./Routers/ArticleRouter.js";
import ContactRouter from "./Routers/ContactRouter.js";
import InternshipRouter from "./Routers/InternshipRouter.js";
import UserRouter from "./Routers/UserRouter.js";
app.use("/api", ArticleRouter, ContactRouter, InternshipRouter, UserRouter);

// upload image
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

