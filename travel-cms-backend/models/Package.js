const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  destinationName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  availableDates: { type: [String], required: true },
  maxTravelers: { type: Number, required: true },
});

module.exports = mongoose.model('Package', packageSchema);
