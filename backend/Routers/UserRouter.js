import express from "express";
import {
  getSingleUserProfile,
  loginUser,
  newUser,
} from "../Controllers/UserControllers.js";
import { isAuth } from "../Middlewares/isAuth.js";

const router = express.Router();

router.post("/create/user", newUser);
router.post("/login/user", loginUser);
router.get("/user-profile/:id", isAuth, getSingleUserProfile);

export default router;
