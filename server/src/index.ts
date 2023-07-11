import express from "express"
import 'dotenv/config' 
import './db'

const app = express()

const PORT = 5001

app.listen(PORT , ()=> {
    console.log(PORT)
})