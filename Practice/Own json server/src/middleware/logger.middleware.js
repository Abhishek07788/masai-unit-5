const logger = (req, res, next) =>{
    console.log("Before", req.url);
    if(req.url === "/"){
        res.send("Under Attack");
    }else{
        next();
    }
};

module.exports = logger;