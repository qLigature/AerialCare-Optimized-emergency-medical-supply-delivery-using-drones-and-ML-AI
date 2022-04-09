const mongoose = require('mongoose');

const droneStationSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  destination_location: {
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
  total_price: {
    type: Number,
  },
  ordered_item: {
    type: String,
  },
  status: {
    type: String,
  },
  notes: {
    type: String,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

const DroneStations = mongoose.model('droneStations', droneStationSchema);

module.exports = DroneStations;
