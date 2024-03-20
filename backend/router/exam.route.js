const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model")
const { bypass, verifyTeacher } = require("../middleware/api.middleware");
router.get("/", bypass, (req, res) => {
  res.send("Hello Exam");
});

// router.post("/create", verifyTeacher, async (req, res) => {
//   try {
//     const { examid, title, description, questions } = req.body;
    
//     // Create a new exam
//     console.log(req.teacher)
//     const exam = new Exam({
//       title,
//       description,
//       creator: req.teacher._id,
//       questions,
//     });

//     // Save the exam to the database
//     await exam.save();

//     res
//       .status(201)
//       .json({ success: 1, message: "Exam created successfully", exam });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: 0, message: "Internal Server Error" });
//   }
// });


router.post("/create", verifyTeacher, async (req, res) => {
  try {
    const { examid, title, description, questions } = req.body;

    if (examid && examid!='') {
      // Update existing exam
      const updatedExam = await Exam.findByIdAndUpdate(examid, {
        title,
        description,
        questions,
      });
      
      if (!updatedExam) {
        return res.status(404).json({ success: 0, message: "Exam not found" });
      }

      return res.status(200).json({ success: 1, message: "Exam updated successfully", exam: updatedExam });
    } else {
      // Create a new exam
      const exam = new Exam({
        title,
        description,
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

router.get("/getall", verifyTeacher, async (req, res) => {
  try {
    // const { id } = req.body;
    console.log(req.teacher)

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
