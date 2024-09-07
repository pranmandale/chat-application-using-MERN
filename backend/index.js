
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import UserRoute from './route/User.route.js';
import messageRoute from './route/message.route.js';
import { app, server } from './SocketIO/server.js';

dotenv.config(); // Load environment variables from .env file

// Middleware setup
app.use(cookieParser());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

// Connect to MongoDB without deprecated options
mongoose.connect(URI)
  .then(() => {
    console.log('Connected successfully with MongoDB');
    // Server from Socket.IO is now listening for real-time communication
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error: ', error);
  });

// Route setup
app.use('/api/user', UserRoute);
app.use('/api/message', messageRoute);
