const mongoose=require('mongoose');

const registeredUser=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true,
})

module.exports = mongoose.model("User", registeredUser);
