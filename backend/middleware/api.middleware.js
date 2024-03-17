
const Teacher = require("../models/teacher.model");
const { decodeToken } = require("../utils/services");

const bypass = (req, res, next) => {
  next();
};

const verifyTeacher = async (req, res, next) => {
  const token = req.header('token');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ success: 0, message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = decodeToken(token)

    const teacher = await Teacher.findOne({_id : decoded.id})
    // Add decoded user to request object
   if(teacher){
    req.teacher = teacher; 
    next();
   }else{
    return res.status(401).json({ success: 0, message: 'authorization denied' });
   }
  } catch (err) {
    res.status(401).json({ success: 0, message: 'Token is not valid' });
  }
};
module.exports = { bypass, verifyTeacher };
