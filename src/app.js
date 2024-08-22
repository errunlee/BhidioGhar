
import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors'
export const app = express();


app.use(cookieParser())
app.use(cors())

app.use('/', (req, res) => {
    res.send('Hello world')
})