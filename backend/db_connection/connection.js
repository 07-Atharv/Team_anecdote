const mongoose = require('mongoose')
const { DB_URI } = require('../utils/constants')



const connectToMongo = () =>{
    mongoose.connect(DB_URI,{}).then(()=>{
        console.log("Connected !!");
        
    }).catch(err => console.log(err))
}
 
module.exports = connectToMongo;