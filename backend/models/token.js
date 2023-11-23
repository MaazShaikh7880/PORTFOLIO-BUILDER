import mongoose, {Schema} from "mongoose";

const tokenmodel = mongoose.Schema({
    refresh_token : String
})

export const Token_R = mongoose.model('token_r',tokenmodel) 