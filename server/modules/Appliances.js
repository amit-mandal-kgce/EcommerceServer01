const mongoose = require("mongoose");

const applianceSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  models: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  stars: {
    type: Number,
    require: true,
  },
  discount: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  sale: {
    type: String,
    require: true,
  },
});

const Appliances = mongoose.model("Appliances", applianceSchema);

module.exports = Appliances;
