import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoMemoryServer } from 'mongodb-memory-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars from server/.env
dotenv.config({ path: path.join(__dirname, '.env') });

import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration (in development Vite proxy handles it, but good to have)
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? false : 'http://localhost:5173',
  credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

// Database Connection
const connectDB = async () => {
  try {
    let dbUrl = process.env.DATABASE_URL;
    let isMemoryServer = false;

    // Use memory server if it's development and URL is localhost
    if (process.env.NODE_ENV !== 'production' && dbUrl.includes('localhost')) {
      const mongoServer = await MongoMemoryServer.create();
      dbUrl = mongoServer.getUri();
      isMemoryServer = true;
      console.log('Started MongoDB Memory Server for local development.');
    }

    await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 5000
    });
    console.log(`MongoDB Connected ${isMemoryServer ? '(In-Memory)' : ''}`);

    // Seed admin automatically based on env vars
    const Admin = (await import('./models/Admin.js')).default;
    const adminExists = await Admin.findOne({ username: process.env.ADMIN_USERNAME });
    
    if (adminExists) {
      // If admin exists, just update the password in case they changed it in Render
      adminExists.password = process.env.ADMIN_PASSWORD;
      await adminExists.save();
      console.log('Admin account password updated from environment.');
    } else {
      const admin = new Admin({ username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD });
      await admin.save();
      console.log('Admin account seeded in database.');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

connectDB();

// Serve Frontend in Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`));
