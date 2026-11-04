const { getUser, register, login } = require("../Contoller/UserContoller")

const route = require("express").Router()

route.get("/", getUser)
route.post("/", register)
route.post("/login", login)

module.exports = route