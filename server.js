const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8000;
//express
app.use(express.json());
app.use(express.static('public'));
app.use(morgan("dev"));


// db mongo
let MONGODB_URI = process.env.MONGODB_URI || 8080;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false})

//routes
//require();
//require();

///listener
app.listen(PORT, (err) =>{
      console.log(err);
  });