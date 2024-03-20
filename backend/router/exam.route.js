const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model")
const { bypass, verifyTeacher } = require("../middleware/api.middleware");
const Submission = require("../models/submission.model");
router.get("/", bypass, (req, res) => {
  res.send("Hello Exam");
});


router.post("/getres",bypass,async(req,res)=>{
 try {
  const {email } = req.body;
  console.log(req.body)
  const exams = await Submission.find({studentEmail : email})
  console.log(exams)
  return res.status(201)
        .json({ success: 1, message: "retrieved", exams });
 } catch (error) {
  console.log(error)
  res
        .status(500)
        .json({ success: 0, message: "Internal Server Error" });
 }

})


router.post("/create", verifyTeacher, async (req, res) => {
  try {
    const { examid, title, start,end ,description, questions } = req.body;
    console.log({ examid, title, start,end ,description, questions } )
    if (examid && examid!='') {
      // Update existing exam
      const updatedExam = await Exam.findByIdAndUpdate(examid, {
        title,
        description,
        questions,start,end
      });
      
      if (!updatedExam) {
        return res.status(404).json({ success: 0, message: "Exam not found" });
      }

      return res.status(200).json({ success: 1, message: "Exam updated successfully", exam: updatedExam });
    } else {
      // Create a new exam
      const exam = new Exam({
        title,
        description, start,end,
        creator: req.teacher._id,
        questions,
      });

      // Save the exam to the database
      await exam.save();

      return res.status(201).json({ success: 1, message: "Exam created successfully", exam });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
});


router.get("/getone", bypass, async (req, res) => {
  try {
    const { id } = req.body;
    

    const exam  = await Exam.findOne({_id:id})

    if(!exam){

      return res
      .status(400)
      .json({ success: 0, message: "NO Exam Found!" });
    }
    res
      .status(201)
      .json({ success: 1, message: "Exam retrieved", exam });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
});

router.post("/getone", bypass, async (req, res) => {
  try {
    const { id } = req.body;
    

    const exam  = await Exam.findOne({_id:id})

    if(!exam){

      return res
      .status(400)
      .json({ success: 0, message: "NO Exam Found!" });
    }
    res
      .status(201)
      .json({ success: 1, message: "Exam retrieved", exam });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
});

const getRandomElements=(array, count) =>{
  // Shuffle the array using Fisher-Yates algorithm
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  // Return the first 'count' elements
  return array.slice(0, count);
}


router.post("/getbystudent", bypass, async (req, res) => {
  try {
    const { id,email,name } = req.body;
    
    const submission = await Submission.findOne({examId : id, studentEmail : email})

    if(submission){
      return res
      .status(400)
      .json({ success: 0, message: "Exam already given" });
    }

    const exam  = await Exam.findOne({_id:id})

    if(!exam){

      return res
      .status(400)
      .json({ success: 0, message: "NO Exam Found!" });
    }

    if(exam.questions.length > 10){
      const random = getRandomElements(exam.questions,10)
      console.log(random)
      exam.questions = random
    }



    res
      .status(201)
      .json({ success: 1, message: "Exam retrieved", exam });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
});

router.get("/getall", verifyTeacher, async (req, res) => {
  try {
    // const { id } = req.body;
    console.log("TEacher ",req.teacher)

    const exams  = await Exam.find({creator:req.teacher._id}).select(['-questions'])

    res
      .status(201)
      .json({ success: 1, message: "Exam retrieved", exams });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
});


module.exports = router;
