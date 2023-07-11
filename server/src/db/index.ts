import mongoose from "mongoose";

const URI = process.env.MONGO_URI as string

mongoose.connect(URI).then(() => {
    console.log("connected to mongoose")
}).catch((err) => {
    console.log(`error ${err}`)
})