const mongoose = require('mongoose');

const droneStationSchema = new mongoose.Schema({
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: [
      {
        type: Number,
      },
    ],
  },
  number_of_drones_available: {
    type: Number,
  },
  total_number_of_drones: {
    type: Number,
  },
});

const DroneStations = mongoose.model('droneStations', droneStationSchema);

module.exports = DroneStations;
