const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  hospital_id: {
    type: String,
  },
  kidney: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  eyes: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  heart: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  liver: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  bone_Marrow: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  ab_positive_blood: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  ab_negative_blood: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  o_negative_blood: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  o_positive_blood: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  a_negative_blood: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  a_positive_blood: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  b_negative_blood: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  b_positive_blood: {
    availability: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
});

const Products = mongoose.model('Products', ProductSchema);

module.exports = Products;
