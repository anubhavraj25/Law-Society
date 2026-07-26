import express from "express";
import {
  applyForInternship,
  createInternship,
  deleteInternship,
  getAllInternships,
  getInternshipsByCategory,
  singleInternship,
  updateInternship,
} from "../Controllers/InternshipControllers.js";
import { isAdmin, isAuth } from "../Middlewares/isAuth.js";

const router = express.Router();

router.post("/add/internship", createInternship);
router.get("/all/internship", getAllInternships);
router.get("/internship/:id", singleInternship);
router.get("/internships/category/:category", getInternshipsByCategory);
router.put("/internships/:id", isAuth, isAdmin, updateInternship);
router.delete("/internships/:id", isAuth, isAdmin, deleteInternship);
router.post("/internships/:id/apply", applyForInternship);

export default router;
