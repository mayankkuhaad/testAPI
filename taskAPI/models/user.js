const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title : {type : String,  required:true},
    is_completed : {type: Boolean}
}) 
const taskModel = mongoose.model("Task", taskSchema);
module.exports = taskModel;