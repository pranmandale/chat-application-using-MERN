
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import UserRoute from './route/User.route.js';

const app = express();

dotenv.config();


app.use(cookieParser());
app.use(cors());

// this is middleware
app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected successfully with MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error: ", error);
    });

// Route setup
app.use("/api/user", UserRoute);
