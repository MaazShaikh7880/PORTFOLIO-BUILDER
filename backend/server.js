import express from 'express'
import cors from 'cors'
import apiroutes from './routes/api.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/',apiroutes)
const PORT = 3001

app.listen(PORT,(req,res)=>{
    console.log(`Server running on ${PORT}`)
})

