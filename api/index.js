const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer =require("multer")

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
  
  destintaion:(req,file,callback) =>{
    callback(null, "images");
  }, filename:(req,file,callback)=> {
    callback(null, "hello.jpg");
  }, 
});

const upload = multer({storage:storage});

app.post("/api/upload", upload.single("file"),(req,res)=>{
  res.status(200).json("El archivo se cargó")
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.listen("5000", () => {
    console.log("Backend ejecutandose.");
  });
  