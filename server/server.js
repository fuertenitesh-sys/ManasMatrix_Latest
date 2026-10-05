import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { setServers } from 'node:dns';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoMemoryServer } from 'mongodb-memory-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load project-root settings, allowing server-specific values to override them.
dotenv.config({ path: path.join(__dirname, '../.env') });
dotenv.config({ path: path.join(__dirname, '.env'), override: true });

import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import contactSubmissionRoutes from './routes/contactSubmissionRoutes.js';

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

app.use('/api', (_req, res, next) => {
  res.set('Cache-Control', 'no-store');
  res.set('Pragma', 'no-cache');
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact-submissions', contactSubmissionRoutes);

// Database Connection
const connectDB = async () => {
  let dbUrl = process.env.DATABASE_URL;
  let isMemoryServer = false;

  if (!dbUrl) {
    throw new Error('DATABASE_URL is not configured. Set it in server/.env.');
  }

  // Use memory server if it's development and URL is localhost
  if (process.env.NODE_ENV !== 'production' && dbUrl.includes('localhost')) {
    const mongoServer = await MongoMemoryServer.create();
    dbUrl = mongoServer.getUri();
    isMemoryServer = true;
    console.log('Started MongoDB Memory Server for local development.');
  }

  try {
    await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 5000
    });
  } catch (error) {
    if (error.code !== 'ECONNREFUSED' || error.syscall !== 'querySrv') {
      throw error;
    }

    const dnsServerConfig = process.env.MONGODB_DNS_SERVERS === undefined
      ? '1.1.1.1,8.8.8.8'
      : process.env.MONGODB_DNS_SERVERS;
    const dnsServers = dnsServerConfig
      .split(',')
      .map(server => server.trim())
      .filter(Boolean);

    if (dnsServers.length === 0) {
      throw new Error('MONGODB_DNS_SERVERS must contain at least one DNS server.');
    }

    console.warn('MongoDB SRV lookup was refused by the system DNS resolver; retrying with configured DNS servers.');
    setServers(dnsServers);
    await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 5000
    });
  }
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
};

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

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`));
  } catch (error) {
    console.error('Server startup failed because MongoDB or admin setup failed:', error);
    await mongoose.disconnect();
    process.exitCode = 1;
  }
};

startServer();
