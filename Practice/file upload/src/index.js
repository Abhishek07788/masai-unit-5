const express = require("express")

 const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, `${__dirname}/../uploads`);
    },
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({storage: storage});
const app = express()
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("<h2>Hello world!</h2>")
})

app.post("/file", upload.single("avatar"), (req, res) =>{
    res.send("File Uploaded");
});

// app.post("/files", upload.array("photos"), (req,res)=>{
//     res.send("File Uploaded");
// });

app.listen(8000, () => {
    console.log("Started at: http://localhost:8000")
})