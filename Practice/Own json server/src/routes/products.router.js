const express = require("express");
//------------import express------------------------
const app = express.Router();


//----------------import db.json---------------------
const fs = require("fs")
const dbfile = fs.readFileSync(`${__dirname}/../../db.json`, {encoding: "utf-8"});
const db = JSON.parse(dbfile);
let products = db.products;


//----------------update json data-------------------
const updateDb = (updateData) =>{
    fs.writeFileSync(`${__dirname}/../../db.json`, JSON.stringify(updateData), {encoding: "utf-8"})
}



//------get products--------------------------------
app.get("/", (req, res) => {
    res.send(products);
  });

//-------get by id---------------------------------
app.get("/:id", (req, res)=>{
    let {id} = req.params;
    product = products.find((p) => p.id === Number(id));
    if(!product){
        res.status(404).send(`id:${id} was not found.!`);
    }
    res.send(product)
})

//-------------------delete by id-----------------
app.delete("/:id", (req, res)=>{
    let {id} = req.params;
    let index = products.findIndex((p) => p.id === Number(id))
    products.splice(index,1)
    updateDb({...db, products});
    res.send(products)
})

//-----------------post request------------------
app.post("/", (req, res)=>{
    products=[
        ...products,{
            ...req.body,
            id: products.length + 1,
        },
    ];
    updateDb({...db, products});
    res.send("Item added.");
})

//------------------patch request-----------------
app.patch("/:id", (req, res)=>{
    let {id} = req.params;
    products = products.map((p)=>{
        if(p.id === Number(id)){
            return {
                ...p,
                ...req.body,
        };
        }else{
            return p;
        }
    })
    updateDb({...db, products});
    res.send("Item updated..")
})


module.exports = app;


