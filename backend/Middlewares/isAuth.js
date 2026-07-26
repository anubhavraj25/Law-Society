import jwt from "jsonwebtoken";
import { Users } from "../Models/UserModel.js";

export const isAuth = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const authHeader = req.headers.authorization;
    // console.log(authHeader);
    if (!authHeader) {
      return res.status(404).json({
        message: " Please Login...",
      });
    }
    const token = authHeader.split(" ")[1];
    const decodeData = jwt.verify(token, process.env.Jwt_sec);
    req.user = await Users.findById(decodeData._id);
    next();
  } catch (error) {
    return res.status(500).json({
      message: "login first",
    });
  }
};

export const isAdmin = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not Authenticated" });
    }
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "You are not Admin" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "error while fetching admin" });
  }
};
