require('dotenv').config()

const PORT = process.env.PORT || 7000;
const DB_URI = process.env.DB_URI ;
const EMAIL_ID = process.env.EMAIL_ID ;
const EMAIL_PASS = process.env.EMAIL_PASS ;
const JWT_SECRET = process.env.JWT_SECRET ;

module.exports = {PORT,DB_URI,EMAIL_ID,EMAIL_PASS,JWT_SECRET}