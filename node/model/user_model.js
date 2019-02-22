import formatDate from '../utils/formatDate'
const mongoose = require('mongoose')
<<<<<<< HEAD
=======


>>>>>>> 3811a7220ac0c6b9c7dc3c7ca28b17d34692aec3
const Schema = mongoose.Schema
const UserSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  CtfId: {
    type: String,
    required: true,
    unique: true
  },
  CtfTp: {
    type: String
  },
  Birthday: {
    type: String
  },
  Address: {
    type: String
  },
  Zip: { // 邮编
      type: String
  },
  Mobile: {
    type: String
  },
  Tel: {
    type: String
  },
  EMail: {
    type: String
  },
  Gender: {
    type: String
  },
  Family: {
      type: String
  },
  Version: {
    type: String,
    default: formatDate(new Date())
  }
}, { collection: 'users', versionKey: false})

module.exports = mongoose.model('users', UserSchema)