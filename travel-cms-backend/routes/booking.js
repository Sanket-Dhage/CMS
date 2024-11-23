const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Get All Bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('packageId', 'title');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Booking Status
router.put('/:id', async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
