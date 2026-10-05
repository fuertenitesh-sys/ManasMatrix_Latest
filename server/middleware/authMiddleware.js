import { timingSafeEqual } from 'crypto';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

export const protectWithApiKey = (req, res, next) => {
  const suppliedKey = req.get('x-api-key');

  if (suppliedKey === undefined) {
    return protect(req, res, next);
  }

  const configuredKey = process.env.ADMIN_API_KEY;
  if (!configuredKey || configuredKey.length < 32) {
    return res.status(503).json({ message: 'API key authentication is not configured' });
  }

  const suppliedBuffer = Buffer.from(suppliedKey);
  const configuredBuffer = Buffer.from(configuredKey);
  if (
    suppliedBuffer.length !== configuredBuffer.length ||
    !timingSafeEqual(suppliedBuffer, configuredBuffer)
  ) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  return next();
};

export const protect = async (req, res, next) => {
  const token = req.cookies?.jwt;
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({ message: 'Authentication is not configured' });
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, secret, { algorithms: ['HS256'] });
  } catch {
    return res.status(401).json({ message: 'Not authorized' });
  }

  if (
    typeof decoded !== 'object' ||
    decoded === null ||
    typeof decoded.userId !== 'string' ||
    !/^[a-f\d]{24}$/i.test(decoded.userId)
  ) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    const admin = await Admin.findById(decoded.userId).select('-password');
    if (!admin) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    req.admin = admin;
    return next();
  } catch (error) {
    console.error('Admin authorization lookup failed:', error);
    return res.status(500).json({ message: 'Unable to authorize request' });
  }
};
