import express from 'express';
import ContactSubmission from '../models/ContactSubmission.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
const allowedPrograms = new Set(['dmit', 'child', 'elite', 'business', 'manas-360', 'team', 'general']);

const getText = (value) => typeof value === 'string' ? value.trim() : '';

router.post('/', async (req, res) => {
  const fullName = getText(req.body.name);
  const phone = getText(req.body.phone);
  const email = getText(req.body.email);
  const program = getText(req.body.program);
  const message = getText(req.body.message);
  const companyName = getText(req.body.companyName);
  const teamSizeValue = getText(String(req.body.teamSize ?? ''));
  const teamSize = teamSizeValue ? Number(teamSizeValue) : null;

  if (!fullName || !phone || !allowedPrograms.has(program) || req.body.consent !== true) {
    return res.status(400).json({ message: 'Please provide your name, phone, service, and consent.' });
  }

  if (fullName.length > 120 || phone.length > 40 || email.length > 254 ||
      message.length > 3000 || companyName.length > 160) {
    return res.status(400).json({ message: 'One or more fields exceed the allowed length.' });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  if (teamSize !== null && (!Number.isInteger(teamSize) || teamSize < 1)) {
    return res.status(400).json({ message: 'Team size must be a positive whole number.' });
  }

  try {
    const submission = await ContactSubmission.create({
      fullName,
      phone,
      email,
      program,
      message,
      companyName,
      teamSize,
      consent: true
    });

    res.status(201).json({
      message: 'Thank you! Your enquiry was submitted successfully.',
      submissionId: submission._id
    });
  } catch (error) {
    console.error('Error saving contact submission:', error);
    res.status(500).json({ message: 'Unable to submit your enquiry. Please try again.' });
  }
});

router.get('/', protect, async (req, res) => {
  try {
    const submissions = await ContactSubmission.find({}).sort({ submittedAt: -1 });
    res.json(submissions);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ message: 'Failed to fetch contact submissions.' });
  }
});

export default router;
