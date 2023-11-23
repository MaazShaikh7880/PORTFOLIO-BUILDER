import { UserData } from "../models/usermodel.js";
import { Token_R } from "../models/token.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

function generateAcessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn:'300s'})
}

// Assuming this function is defined somewhere in your codebase
const storeRefreshToken = async (refreshToken) => {
    try {
        // Create a new instance of the Token_R model with the refresh_token
        const tokenRecord = new Token_R({ refresh_token: refreshToken });

        // Save the token record to the database
        await tokenRecord.save();

        console.log("Refresh token stored successfully");
    } catch (error) {
        console.error("Error storing refresh token:", error.message);
        // Handle the error appropriately (e.g., throw an exception or log the error)
    }
};

// Use this function in your main code when storing the refresh token

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
        if(!username || !password){
            return res.status(400).send("Please enter all fields")   
        }

        const salt = await bcrypt.genSalt()
        const hashpassword = await bcrypt.hash(password,salt)

        const newuser = {
            username : username,
            email : email,
            password : hashpassword
        }

        const user = await UserData.create(newuser)
        return res.status(200).send({message: 'User Creaeted successfully',user})

    }catch(error){
        return res.status(500).send({message: error.message})
    }
}

const authnticateUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("Please enter all fields");
        }

        const user = await UserData.findOne({ email: email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (isPasswordMatch) {
            // const accessToken = generateAcessToken(user);
            // const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET);

            // Store the refresh token in your database or an array
            // For simplicity, I'll assume a function storeRefreshToken is defined
            // await storeRefreshToken(refreshToken);

            return res.status(200).json({
                message: "User authenticated successfully",
                // user: user,
                // accessToken: accessToken,
                // refreshToken: refreshToken,
            });
        } else {
            return res.status(401).send("Incorrect password");
        }
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};


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
    delelteUser,
    authnticateUser
}