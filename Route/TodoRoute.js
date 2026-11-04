const { getTodo, updateTodo, postTodo, deleteTodo } = require("../Contoller/TodoContoller")
const  auth  = require("../Middlerware/auth")

const route = require("express").Router()

route.get("/", getTodo)
route.post("/", auth, postTodo)
route.put("/:id", auth, updateTodo)
route.delete("/:id", auth, deleteTodo)

module.exports = route
