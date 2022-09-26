const express = require("express")
const cors = require("cors")
const userRouter = require("./features/users/users.router")
const connect = require("./config/db")

const app = express()
app.use(express.json());
app.use(cors());
app.use("/users", userRouter)

app.get("/", (req, res) =>{
    res.send("<h2>Hello world!</h2>")
})

app.listen(8000, async () => {
    await connect();
    console.log("Started at: http://localhost:8000")
})