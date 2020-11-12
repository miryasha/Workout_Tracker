
const express = require("express");

const morgan = require("morgan");

const mongoose = require("mongoose");

//express
app.use(express.json());
app.use(express.static('public'));



// db mongo
var MONGODB_URI = process.env.MONGODB_URI || 8080;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false})


