const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const{JWT_SECRET,SALT_ROUNDS} = require("./constants")


const hashPassword = async (password) =>{
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPass = await bcrypt.hash(password, salt);
    return hashedPass;
}

const matchPassword = async (plainPassword,hashedPassword) =>{
    let passwordMatches = await bcrypt.compare( plainPassword,hashedPassword);
    return passwordMatches;
}

const generateToken = (data)=>{
    return jwt.sign(data,JWT_SECRET)
}

module.exports = {
    hashPassword,matchPassword,generateToken
}