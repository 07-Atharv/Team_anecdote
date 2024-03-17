const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  qtype: {
    type: String,
    enum: ["text", "image", "code"],
    required: true,
  },
  qtext: {
    type: String,
    required: true,
  },
  qimg: {
    type: String,
  },
  qcode: {
    type: String,
  },

  anstype: {
    type: String,
    enum: ["text", "mcq", "code", "check"],
    required: true,
  },
  options: [
    {
      otype: {
        type: String,
        enum : ["text", "image", "code"],
        default :"text"
      },
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

const examSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Teacher",
  },

  questions:[questionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
