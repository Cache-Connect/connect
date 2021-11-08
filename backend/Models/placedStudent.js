const mongoose=require('mongoose');

// const Schema=new mongoose.Schema();

const placedStudent=new mongoose.Schema({
    enrollmentNo:{
        type:String,
        required:true,
    },
    companyName:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    linkedIn:{
        type:String,
        required:true
    },
    ctc:{
        type:String,
        required:true
    },
    recruitmentType:{
        type:String,
        required:true
    },
},
{
    timestamps:true,
})

module.exports = mongoose.model("placedStudent", placedStudent);