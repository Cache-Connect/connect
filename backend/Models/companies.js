const mongoose=require('mongoose');

const Schema=new mongoose.Schema;

const companies=new Schema({
    companyName:{
        type:String,
        required:true
    },
    linkToApply:{
        type:String,
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

module.exports = mongoose.model("Companies", companySchema);