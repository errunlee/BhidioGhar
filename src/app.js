import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
export const app = express();

app.use(cookieParser());
app.use(cors());

//router import

import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/users", userRouter);

app.use("/", (req, res) => {
  res.send("Hello world");
});
