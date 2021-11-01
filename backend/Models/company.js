const mongoose=require('mongoose');

// const Schema=new mongoose.Schema();

const company=new mongoose.Schema({
    companyId:{
        type:Number,
        required:true
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
    dateOfArrival:{
        type:Date,
        required:true
    },
    ctcOffered:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    bond:{
        type:String,
        default:"0 years"
    }
})

module.exports = mongoose.model("company", company);