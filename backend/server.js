import express from 'express'
import cors from 'cors'
import apiroutes from './routes/api.js'
import mongoose from 'mongoose'
import { UserData } from './models/usermodel.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/',apiroutes)
const PORT = 3001

mongoose.connect('mongodb://127.0.0.1:27017/UserDataProject')
.then(()=>{
    console.log('Connected to dbs')
    app.listen(PORT,(req,res)=>{
        console.log(`Server running on ${PORT}`)
    })
})
.catch((error)=>{
    console.log({message:error.message})
})



