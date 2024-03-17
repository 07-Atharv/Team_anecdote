
const express = require("express");
const router = express.Router();
\
const {bypass,verifyTeacher} = require("../middleware/api.middleware");
router.get("/",bypass,(req,res)=>{
    res.send('Hello Exam')
})

router.post('/create', async (req, res) => {
    try {
      const { title, description, teacher, questions } = req.body;
  
      // Create a new exam
      const exam = new Exam({
        title,
        description,
        creator:teacher._id,
        questions,
      });
  
      // Save the exam to the database
      await exam.save();
  
      res.status(201).json({ success: 1, message: 'Exam created successfully', exam });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: 0, message: 'Internal Server Error' });
    }
  });


module.exports = router