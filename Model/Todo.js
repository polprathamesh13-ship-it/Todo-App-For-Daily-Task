const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    name:{
        type:String,
        required:true
    },
    addTask: {
        type: Date,
    },
    deleteTask: {
        type: Date,
    }
})

module.exports = mongoose.model("todo", todoSchema)
