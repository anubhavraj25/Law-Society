import express from "express";
import {
  addArticle,
  deleteArticle,
  getAllArticles,
  getSingleArticles,
  updateArticle,
} from "../Controllers/ArticleController.js";
import { uploadFiles } from "../Middlewares/Multer.js";
import { isAdmin, isAuth } from "../Middlewares/isAuth.js";

const router = express.Router();

router.post("/new/article", isAuth, isAdmin, uploadFiles, addArticle);
router.get("/all/articles", getAllArticles);
router.get("/articles/:id", getSingleArticles);
router.put("/articles/:id", isAuth, isAdmin, uploadFiles, updateArticle);
router.delete("/articles/:id", isAuth, isAdmin, deleteArticle);

export default router;
