const { json } = require("express");
const express = require("express");
const productRouter = require("./routes/products.router")
const userRouter = require("./routes/users.router")
const MiddAuth = require("./middleware/auth.middleware")
const MiddLogger = require("./middleware/logger.middleware")

const app = express();

app.use(express.json());
app.use(MiddAuth)
app.use(MiddLogger)
app.use("/products", productRouter)
app.use("/users", userRouter)

//-------------simple print html--------------------
app.get("/", (req, res) => {
    res.send("<h2>Hello world!</h2>");
});


//------------------server name---------------------
app.listen(8000, () => {
  console.log("Started at: http://localhost:8000");
});
