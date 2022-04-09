const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
  },
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
  products_id: {
    type: String,
  },
});

hospitalSchema.index({ location: '2dsphere' });

const Hospitals = mongoose.model('hospitals', hospitalSchema);

module.exports = Hospitals;
