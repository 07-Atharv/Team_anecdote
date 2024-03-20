const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model")
const { bypass, verifyTeacher } = require("../middleware/api.middleware");
const Submission = require("../models/submission.model")
router.get("/", bypass, (req, res) => {
  res.send("Hello Exam");
});


const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

function calculateSimilarity(teacherAnswer, studentAnswer) {
    const teacherTokens = new Set(tokenizer.tokenize(teacherAnswer.toLowerCase()));
    const studentTokens = new Set(tokenizer.tokenize(studentAnswer.toLowerCase()));

    const intersection = new Set([...teacherTokens].filter(token => studentTokens.has(token)));
    const union = new Set([...teacherTokens, ...studentTokens]);

    const similarity = intersection.size / union.size;
    return similarity;
}





const calculateScore =async (submission) =>{
    // console.log("Submission : ",submission)
    let score = 0;

    // console.log()
    const exam = await Exam.findById(submission.examId)
submission.answers.forEach(submissionAnswer => {
    const examQuestion = exam.questions.find(question => question._id.toString() === submissionAnswer.questionId.toString());

    if (examQuestion) {
        if (submissionAnswer.anstype === examQuestion.anstype) {
            if (submissionAnswer.anstype === 'text' ) {
                const similarity = calculateSimilarity(examQuestion.options[0].text,submissionAnswer.answer[0])
                console.log("Similarity: ",similarity)
                if(similarity>= 0.5){
                    score++;
                }
                
            } else if (submissionAnswer.anstype === 'code' && JSON.stringify(submissionAnswer.answer) === JSON.stringify(examQuestion.options[0].text)) {
                score++;
            } else if (submissionAnswer.anstype === 'checkbox' || submissionAnswer.anstype === 'mcq') {
                const selectedOptions = submissionAnswer.answer;
                const correctOptions = examQuestion.options.filter(option => option.isCorrect).map(option => option.text);

                // Check if all correct options are selected and no incorrect options are selected
                if (selectedOptions.length === correctOptions.length && selectedOptions.every(option => correctOptions.includes(option))) {
                    score++;
                }
            }
        }
    }
});

return score;

}

router.post('/submit', bypass,async (req, res) => {
    try {
        const submissionData = req.body;
        console.log(submissionData)
        let submission = new Submission(submissionData);
        submission = await submission.save()
        const score = await calculateScore(submission)
        // submission.score = score;
        console.log(score)
       submission = await  Submission.updateOne({_id:submission.id},{score:score})
       
        res.status(201).json({ success:1,message: 'Submission successful', submission });
    } catch (error) {
        console.error('Error submitting:', error);
        res.status(500).json({ success:0, message: 'Internal Server Error' });
    }
});

module.exports = router;
