const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

//express

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// db mongo
const MONGODB_URI = process.env.MONGODB_URI || 8000 || "mongodb://blog:lsdkf679ktYh@test-shard-00-00.iffsj.mongodb.net:27017,test-shard-00-01.iffsj.mongodb.net:27017,test-shard-00-02.iffsj.mongodb.net:27017/note-tuts?ssl=true&replicaSet=atlas-pl2ua8-shard-0&authSource=admin&retryWrites=true&w=majority" || "mongodb://localhost/workout" ;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false })
.then((result) =>{
      ///listener
app.listen(PORT, (err) =>{
      console.log(err);
  });
})
.catch((err) => console.log(err))

//routes
require("./routes/api")(app);
require("./routes/html")(app);

