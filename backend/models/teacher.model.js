const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  profileurl:{
    type: String,
  },
  clientid: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  institution: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
