const mongoose=require('mongoose');

// const Schema=new mongoose.Schema();

const company=new mongoose.Schema({
    companyId:{
        type:Number,
        required:true,
        unique:true
    },
    companyName:{
        type:String,
        required:true
    },
    linkToApply:{
        type:String,
    },
    logoLink:{
        type:String,
        required:true
    },
    arrivalDate:{
        type:Date,
        required:true
    },
    ctcOffered:{
        type:String,
        required:true
    },
    recruitmentType:{
        type:String,
        required:true
    },
    bond:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model("company", company);