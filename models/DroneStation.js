const mongoose = require('mongoose');

const droneStationSchema = new mongoose.Schema({
  location: {
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
  number_of_drones_available: {
    type: Number,
  },
});

droneStationSchema.index({ location: '2dsphere' });

const DroneStations = mongoose.model('droneStations', droneStationSchema);

module.exports = DroneStations;
