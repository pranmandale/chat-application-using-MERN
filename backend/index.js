import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI)
    console.log("connected successfully with mongodb")
} catch (error) {
    console.log(error)
}

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})