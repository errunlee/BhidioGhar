import e from "express";
import { User } from "../../models/user.model.js";
import { asyncHandler } from "../../utills/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // const {username,email,password}=req.body
  console.log("hello");
  res.json({ message: "success" });
});

export { registerUser };
