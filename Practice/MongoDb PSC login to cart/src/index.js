const express = require("express")
const dbconnect = require("../config/db")
const userRouter = require("../feature/user/user.router")
const productRouter = require("../feature/product/product.router")
const cartRouter = require("../feature/cart/cart.router")

const app = express()
app.use(express.json())
app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/cart", cartRouter)

app.get("/", (req, res)=>{
    res.send("<h2>Hello world!</h2>")
})


app.listen(8000, async ()=>{
    await dbconnect();
    console.log("Started at: http://localhost:8000")
})
