const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placementSchema = new Schema({
    student_name:String,
    branch:String,
    batch:String,
    company_name:String,
    type_of_placement:String,
    contact_info:String,
})

module.exports = mongoose.model("Placement", placementSchema);