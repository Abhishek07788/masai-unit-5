const express = require("express")
const User = require("./user.model")

const app = express.Router()

app.post("/login", async (req, res)=>{
    let {email, password} = req.body;
    try{
        let user = await User.findOne({email, password})
        if(!user){
            return res.status(401).send("Authentication failed!")
        }
        res.send({
            token: `${user.id}:${user.name}:${user.password}`
        })

    }catch(err){
        console.log(err)
        res.status(500).send("Server Error.!")
    }
})
app.post("/signup", async (req, res)=>{
    let {email} = req.body;
    try{
    let user = await User.findOne({email})
    if(user){
        return res.status(404).send("User already Exist.!")
    }
    let newUser = await User.create(req.body)
    res.send({
        token: `${newUser.id}:${newUser.email}:${newUser.password}`
    })
} catch(err){
    console.log(err)
    res.status(500).send("Server Error.!")
}
})
module.exports = app;