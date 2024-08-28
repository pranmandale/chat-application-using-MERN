// in this file we store id of senders and receivers
// to create conversation for new user 

import mongoose from "mongoose";
import User from '../models/user.model.js'
import Message from "./message.model.js";

const converstionSchema = mongoose.Schema({
    members:[
        // we are storing id of sender and receiver
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        }
    ],
    messages:[
        // here we are storing id of each message
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Message,
            default:[],
        }
    ]
},{timestamps:true})


const Conversation = mongoose.model('conversation',converstionSchema)
export default Conversation;