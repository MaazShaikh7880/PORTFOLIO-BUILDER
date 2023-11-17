import express from 'express'
import apicontroller from '../controllers/apicontroller.js'

const router = express.Router()

router.get('/data',apicontroller.getData)


export default router