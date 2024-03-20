const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: "Exam",
  },
  anstype:{
    type: String,
    enum: ["text", "mcq", "code", "check"],
  },
  answer: [
    {
      type: String,
    }
  ],
});

const submissionSchema = new Schema({

    examId :{
        type: Schema.Types.ObjectId,
        required : true,
    },

  studentName: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
  },
  answers: [answerSchema],
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    default: 0,
  },
});

submissionSchema.methods.calculateScore = async function() {
    let totalScore = 0;

    for (const answer of this.answers) {
        const question = await mongoose.model('Exam').findById(answer.questionId);
        if (question) {
            if (answer.anstype === 'text' || answer.anstype === 'code') {
                const correctAnswer = question.correctAnswer;
                if (correctAnswer === answer.answer[0]) {
                    totalScore++;
                }
            } else if (answer.anstype === 'mcq' || answer.anstype === 'check') {
                const correctAnswers = question.options.filter(option => option.isCorrect).map(option => option.text);
                if (correctAnswers.length === answer.answer.length && correctAnswers.every((value, index) => value === answer.answer[index])) {
                    totalScore++;
                }
            }
        }
    }

    this.score = totalScore;
    await this.save();

    return totalScore;
};


const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;
