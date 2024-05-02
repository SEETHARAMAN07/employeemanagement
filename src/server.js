
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT =3000;
const MONGO_URL = "mongodb://localhost:27017/Login";
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('Login'));

mongoose.connect(MONGO_URL).then(() => {
    console.log("DB Connected");
    
  })
  .catch((err) => {
    console.log(err);
  }); //Mongoose connection created*/

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  

  const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type:String },
    cpassword:{type:string}
  });

  let user = mongoose.model("users", userSchema);

  app.post("/users", (req, res) => {
    console.log("success1");
      const  name = req.body.name;
      const pass=req.body.pass;
  
      console.log("Received data:", { name,pass }); // Lreceived data
      user.insertMany({name:name,password:pass});
  res.json("success");
  });