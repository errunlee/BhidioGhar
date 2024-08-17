import mongoose from "mongoose"

export const connectToDb = async () => {

    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log('connected to db')
        // console.log(connection)
    } catch (error) {
        console.log('failed to connect to db')
        console.log(error)
    }
}