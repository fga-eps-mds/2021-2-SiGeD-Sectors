const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
  open: {
    type: Boolean,
    default: true,
    require: true,
  },
  name: {
    type: String,
    unique: true,
    require: [true],
  },
  description: {
    type: String,
    require: [true],
  },
  createdAt: {
    type: Date,
    require: [true],
  },
  updatedAt: {
    type: Date,
    require: [true],
  },
});

module.exports = mongoose.model('Sector', sectorSchema);
