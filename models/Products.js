const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  hospital_id: {
    type: String,
  },
  kidney: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  eyes: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  heart: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  liver: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  bone_Marrow: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  ab_positive_blood: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  ab_negative_blood: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  o_negative_blood: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  o_positive_blood: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  a_negative_blood: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  a_positive_blood: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  b_negative_blood: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
  b_positive_blood: {
    availability: {
      type: Number,
      default: 20,
    },
    price: {
      type: Number,
      default: 2000,
    },
  },
});

const Products = mongoose.model('Products', ProductSchema);

module.exports = Products;
