const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  destination_location: {
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
  hospital_location: {
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
  drone_location: {
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
  ordered_date: {
    type: Date,
    default: Date.now,
  },
  drone_id: {
    type: String,
  },
});

OrderSchema.index({ destination_location: '2dsphere' });

const Orders = mongoose.model('Orders', OrderSchema);

module.exports = Orders;
