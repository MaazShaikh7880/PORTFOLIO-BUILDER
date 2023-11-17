import { UserData } from "../models/usermodel.js";

const getAllUsers = async (req,res) => {
    try{
        const allUsers = await UserData.find({})
        return res.status(200).send(allUsers)
    }catch(error){
        return res.status(500).send({message: error.message})
    }
}

const getUser = async (req,res) => {
    try{
        const {id} = req.params
        const result = await UserData.findById(id)

        if(!result){
            return res.status(404).send('User not found')
        }
        return res.status(200).send({message:"User found",result})

    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

const createUser = async (req,res) => {
    try{
        const {username , email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).send("Please enter all fields")   
        }
        const newuser = {
            username : username,
            email : email,
            password : password
        }

        const user = await UserData.create(newuser)
        return res.status(200).send({message: 'User Creaeted successfully',user})

    }catch(error){
        return res.status(500).send({message: error.message})
    }
}

const updateUser = async (req,res) => {
    try{
        const {id} = req.params
        const {username , email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).send("Please enter all fields")   
        }
        const newuser = {
            username : username,
            email : email,
            password : password
        }

        const result = await UserData.findByIdAndUpdate(id,newuser)
        if(!result){
            return res.status(404).send("User not found")
        }{
            return res.status(200).send({message: 'User updated successfully'})
        }

    }catch(error){
        return res.status(500).send({message: error.message})
    }
}

const delelteUser = async (req,res) =>{
    try{
        const {id} = req.params
        const result = await UserData.findByIdAndDelete(id)
        if(!result){
            return res.status(404).send('User not found')
        }
        return res.status(200).send('User deleted successfully')
    }catch(error){
        return res.status(500).send({message: error.message})
    }
}

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    delelteUser
}