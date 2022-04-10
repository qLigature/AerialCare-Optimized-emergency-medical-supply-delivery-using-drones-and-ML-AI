const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  current_location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  status: {
    type: String,
  },
});

droneSchema.index({ current_location: '2dsphere' });

const drones = mongoose.model('drones', droneSchema);

module.exports = drones;
