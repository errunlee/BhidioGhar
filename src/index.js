import dotenv from 'dotenv'
import mongoose from "mongoose";
import express from "express";
import { connectToDb } from "./db/index.js";


dotenv.config()
const app = express()

connectToDb();