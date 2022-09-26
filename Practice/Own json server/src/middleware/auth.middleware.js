const auth = (req, res, next) =>{
    console.log("Before Auth", req.url);
    if(req.url.startsWith("/products")){
        if(req.headers.token === "1234"){
            next();
        }else{
            res.status(401).send("Not Authorized!")
        }
    }else{
      next();   
    }
    console.log("After Auth", req.url);
}

module.exports = auth;