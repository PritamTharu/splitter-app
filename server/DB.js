const  mongoose  = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();


var mongoURL = process.env.MONGO_URI || 'mongodb+srv://iampritam100:Pritam100@cluster0.rh3gu.mongodb.net/splitter_db'


mongoose.connect(mongoURL);
var db = mongoose.connection
db.on('connected',()=>{
    console.log("connected to db");
})
db.on('error',()=>{
    console.log("error");
})


module.exports = mongoose