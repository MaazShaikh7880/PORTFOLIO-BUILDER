import express from 'express'
import apicontroller from '../controllers/apicontroller.js'

const router = express.Router()

router.get('/data',apicontroller.getAllUsers)
router.get('/data/:id',apicontroller.getUser)
router.post('/data',apicontroller.createUser)
router.put('/data/:id',apicontroller.updateUser)
router.delete('/data/:id',apicontroller.delelteUser)
router.post('/data/auth',apicontroller.authnticateUser)


export default router