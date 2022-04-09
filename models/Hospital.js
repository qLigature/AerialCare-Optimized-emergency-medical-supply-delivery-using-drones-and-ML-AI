const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
  },
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
  products_id: {
    type: String,
  },
});

const Hospitals = mongoose.model('hospitals', hospitalSchema);

module.exports = Hospitals;
