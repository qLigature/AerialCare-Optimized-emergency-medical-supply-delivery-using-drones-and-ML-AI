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

OrderSchema.index({ location: '2dsphere' });

const Orders = mongoose.model('Orders', OrderSchema);

module.exports = Orders;
