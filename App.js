const express = require("express");
const mongoose = require("mongoose");
require("dns").setServers(["8.8.8.8", "1.1.1.1"]); //imp
require("dotenv/config")
const TodoRoute = require("./Route/TodoRoute")
const UserRoute = require("./Route/UserRoute")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("home")
})

app.use("/api/user",UserRoute)
app.use("/api/todo",TodoRoute)


app.listen(process.env.PORT || 5000 )

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected)
    } catch (error) {
        console.log(error)
    }
}

db()