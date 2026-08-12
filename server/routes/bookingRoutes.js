import express from 'express';
import Booking from '../models/Booking.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Generate a random Booking ID like BM-12345
const generateBookingId = () => {
  return 'BM-' + Math.floor(10000 + Math.random() * 90000);
};

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
router.post('/', async (req, res) => {
  const { name, phone, service, date, time } = req.body;

  if (!name || !phone || !service || !date || !time) {
    return res.status(400).json({ success: false, message: 'All required fields are required' });
  }

  try {
    const booking = new Booking({
      bookingId: generateBookingId(),
      fullName: name,
      phone,
      service,
      preferredDate: date,
      preferredTime: time,
    });

    const createdBooking = await booking.save();
    res.status(201).json({
      success: true,
      message: 'Booking request submitted successfully',
      booking: createdBooking
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ success: false, message: 'Unable to submit booking request' });
  }
});

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private (Admin only)
router.get('/', protect, async (req, res) => {
  try {
    const bookings = await Booking.find({}).sort({ submittedAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

// @desc    Update booking status
// @route   PATCH /api/bookings/:id/status
// @access  Private (Admin only)
router.patch('/:id/status', protect, async (req, res) => {
  const { status } = req.body;

  try {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
      booking.status = status;
      const updatedBooking = await booking.save();
      res.json(updatedBooking);
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update status' });
  }
});

export default router;
