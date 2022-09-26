const express = require("express")


const users = require("./users.schema")
const app = express.Router();


//http://localhost:8000/users?page=1&limit=40&orderBy=gender&order=asc

app.get("/", async (req, res)=>{
const {page=1, limit=10, orderBy="id", order="asc"} = req.query;
let u = await users.find({}, {_id:0, id:1, first_name:1, last_name:1, age:1, gender:1})
.sort({[orderBy]: order === "asc" ? 1 : -1})
.skip((page - 1) * limit)
.limit(limit);
res.send(u);
})

app.post("/", async (req, res)=>{
    let u = req.body;
    try{
        let newUser = await users.create(u);
        res.send(newUser)
    } catch (e){
        res.status(505).send(e.message);
    }
    });

module.exports = app;