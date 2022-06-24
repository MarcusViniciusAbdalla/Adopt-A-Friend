const mongoose = require('../db/conn')
const { Schema } = mongoose

const Friend = mongoose.model(
  'Friend',
  new Schema(
  {
    
  },
  { timestamps: true },
  ),
)

module.exports = Friend

