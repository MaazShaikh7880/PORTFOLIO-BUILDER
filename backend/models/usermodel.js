import mongoose, { Schema } from "mongoose";

const usermodel = mongoose.Schema(
    {
        username : {
            type: String,
            required : true,
        },
        email : {
            type: String,
            required : true,
        },
        password : {
            type : String,
            required : true,
        }
    }
)

export const UserData = mongoose.model('User',usermodel) 