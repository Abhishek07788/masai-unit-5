const express = require("express");
//------------import express------------------------
const app = express.Router();


//----------------import db.json---------------------
const fs = require("fs")
const dbfile = fs.readFileSync(`${__dirname}/../../db.json`, {encoding: "utf-8"});
const db = JSON.parse(dbfile);
let users = db.users;


//----------------update json data-------------------
const updateDb = (updateData) =>{
    fs.writeFileSync(`${__dirname}/../../db.json`, JSON.stringify(updateData), {encoding: "utf-8"})
}



//------get users--------------------------------
app.get("/", (req, res) => {
    res.send(users);
  });

//-------get by id---------------------------------
app.get("/:id", (req, res)=>{
    let {id} = req.params;
    user = users.find((p) => p.id === Number(id));
    if(!user){
        res.status(404).send(`id:${id} was not found.!`);
    }
    res.send(user)
})

//-------------------delete by id-----------------
app.delete("/:id", (req, res)=>{
    let {id} = req.params;
    let index = users.findIndex((p) => p.id === Number(id))
    users.splice(index,1)
    updateDb({...db, users});
    res.send(users)
})

//-----------------post request------------------
app.post("/", (req, res)=>{
    users=[
        ...users,{
            ...req.body,
            id: users.length + 1,
        },
    ];
    updateDb({...db, users});
    res.send("Item added.");
})

//------------------patch request-----------------
app.patch("/:id", (req, res)=>{
    let {id} = req.params;
    users = users.map((p)=>{
        if(p.id === Number(id)){
            return {
                ...p,
                ...req.body,
        };
        }else{
            return p;
        }
    })
    updateDb({...db, users});
    res.send("Item updated..")
})


module.exports = app;


