import dotenv from 'dotenv'
import { connectToDb } from "./db/index.js";
import { app } from './app.js';


dotenv.config()

connectToDb().then(() => {
    app.listen((process.env.PORT), () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })

}).catch((err) => {
    console.log('failed to connect to db!!!', err)

});