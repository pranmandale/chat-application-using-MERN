// user schema is defined in this file

import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        
    }

},{timestamps:true})   //createdAT & updatedAt

const User = mongoose.model("User",userSchema)

export default User



// https://gold-firefly-178595.postman.co/workspace/ChatApp~16b97135-32ae-4284-a88a-c361bf2b53e2/request/37762870-bc4b15a6-a713-4908-97b5-49bf13cc8245?tab=body


// https://gold-firefly-178595.postman.co/workspace/ChatApp~16b97135-32ae-4284-a88a-c361bf2b53e2/request/37762870-bc4b15a6-a713-4908-97b5-49bf13cc8245?tab=body