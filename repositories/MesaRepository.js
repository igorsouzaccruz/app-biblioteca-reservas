const mongoose = require("mongoose");


const Mesa = mongoose.model('Mesa', {
  _id:String,
  numero:Number,
  preferencial:Boolean,
});

module.exports = Mesa;