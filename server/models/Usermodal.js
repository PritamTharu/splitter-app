const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   
    name: {type:String , require},
    email: {type:String, require},
    phone: {type:Number, require, match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/},
    isAdmin: {type:Boolean,require,default:false},


} , {

    timestamps:true,
})

const usermodel = mongoose.model('users',userSchema)
module.exports = usermodel