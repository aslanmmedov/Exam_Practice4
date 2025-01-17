const mongoose = require("mongoose")
const { Schema } = mongoose;

const ClothSchema = new Schema({
  name: String, 
  image: String,
  price: Number,
  oldPrice: Number,
  category: String,
  },{versionKey:false});

const ClothModel = mongoose.model('Cloth',ClothSchema);

module.exports = ClothModel;