import express from 'express';
import Booking from '../models/Booking.js';
import ContactSubmission from '../models/ContactSubmission.js';
import { protectWithApiKey } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/requests', protectWithApiKey, async (req, res) => {
  try {
    const source = typeof req.query.source === 'string'
      ? req.query.source.trim().toLowerCase()
      : '';

    if (source && !['booking', 'contact'].includes(source)) {
      return res.status(400).json({
        message: 'Invalid source. Use "booking" or "contact".'
      });
    }

    const [bookingLeads, contactLeads, bookings, contactSubmissions] = await Promise.all([
      Booking.countDocuments(),
      ContactSubmission.countDocuments(),
      source === 'contact'
        ? Promise.resolve([])
        : Booking.find({}).sort({ submittedAt: -1 }).lean(),
      source === 'booking'
        ? Promise.resolve([])
        : ContactSubmission.find({}).sort({ submittedAt: -1 }).lean()
    ]);

    const requests = [
      ...(source === 'contact' ? [] : bookings.map(
        booking => ({ ...booking, source: 'Booking' })
      )),
      ...(source === 'booking' ? [] : contactSubmissions.map(
        submission => ({ ...submission, source: 'Contact Us' })
      ))
    ].sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

    return res.json({
      summary: {
        totalLeads: bookingLeads + contactLeads,
        bookingLeads,
        contactLeads
      },
      data: requests
    });
  } catch (error) {
    console.error('Error fetching admin requests:', error);
    return res.status(500).json({ message: 'Failed to fetch requests' });
  }
});

export default router;
