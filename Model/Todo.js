const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    addTask: {
        type: Date,
    },
    deleteTask: {
        type: Date,
    }
})

module.exports = mongoose.model("todo", todoSchema)