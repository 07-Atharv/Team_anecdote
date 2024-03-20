const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model")
const { bypass, verifyTeacher } = require("../middleware/api.middleware");
const Submission = require("../models/submission.model")
router.get("/", bypass, (req, res) => {
  res.send("Hello Exam");
});



router.post('/submit', bypass,async (req, res) => {
    try {
        const submissionData = req.body;
        console.log(submissionData)
        const submission = new Submission(submissionData);
        await submission.calculateScore(); // Calculate the score
        await submission.save(); // Save the submission to the database
        res.status(201).json({ success:1,message: 'Submission successful', submission });
    } catch (error) {
        console.error('Error submitting:', error);
        res.status(500).json({ success:0, message: 'Internal Server Error' });
    }
});

module.exports = router;
