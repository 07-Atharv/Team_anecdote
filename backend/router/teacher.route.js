
const express = require("express");
const router = express.Router();

const Teacher = require("../models/teacher.model")

const {bypass} = require("../middleware/api.middleware");
const { generateToken } = require("../utils/services");

router.get("/",bypass,(req,res)=>{
    res.send('Hello Teacher')
})

router.post("/signup",bypass, async (req,res)=>{
    try {
        console.log(req.body)
        const { name, profileurl,clientid,email, institution, verified } = req.body;
    
        // Check if email is already registered
        const existingTeacher = await Teacher.findOne({ email });
        if (existingTeacher) {
          return res.status(400).json({success : 0, message: 'Email already registered' });
        }
    
        // Create a new teacher
        const teacher = new Teacher({ name, profileurl,clientid,email, institution, verified });
        await teacher.save();
    
        res.status(201).json({ success : 1,message: 'Teacher created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success : 0,message: 'Server Error' });
      }
})

router.post("/signin",bypass, async (req,res)=>{
    try {
        const { email } = req.body;
    
        // Check if teacher exists
        const teacher = await Teacher.findOne({ email });
        if (!teacher) {
          return res.status(401).json({success : 0, message: 'Invalid credentials' });
        }
    
        // Check if teacher is verified
        if (!teacher.verified) {
          return res.status(401).json({success : 0, message: 'Account not verified' });
        }
    
        res.status(200).json({ success : 1,message: 'Login Successfull', token : generateToken({id:teacher._id}) });
      } catch (error) {
        console.error(error);
        res.status(500).json({success : 0, message: 'Server Error' });
      }
})



module.exports = router