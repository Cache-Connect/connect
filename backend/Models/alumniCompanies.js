const mongoos=require('mongoose');

const Schema=new mongoose.Schema;

const alumniCompanies=new Schmea({
    name:{
        type:String,
        required:true
    },
    logoLink:{
        type:String,
        required:true
    },
})