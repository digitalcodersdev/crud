const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
  phone: { type: Number, required: true },
  createdOn: { type: Number, default: new Date().getTime() },
  updatedOn: { type: Number, default: 0 },
  deletedOn: { type: Number, default: 0 },
})

const User = mongoose.model('User', schema)

module.exports = User
