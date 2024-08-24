import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import UserRoute from './route/User.route.js';


const app = express();

dotenv.config();

// this is middleware for sending request
app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI)
    console.log("connected successfully with mongodb")
} catch (error) {
    console.log(error)
}

// this is route
app.use("/user",UserRoute)

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})
