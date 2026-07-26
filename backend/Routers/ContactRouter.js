import express from "express";
import { newContact } from "../Controllers/ContactController.js";
import { isAuth } from "../Middlewares/isAuth.js";

const router = express.Router();

router.post("/contact", isAuth, newContact);

export default router;
