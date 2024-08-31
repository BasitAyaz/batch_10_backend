require('dotenv').config();
const express = require("express");
const App = express();
const userroute = require("./routes/userroute");
const authroute = require("./routes/authroute");
const mongoose = require("mongoose");

App.use(express.json());
App.get('/', (req, res) => {
  res.send('Welcome to Backend')
})






App.use('/users', userroute)
App.use('/auth', authroute)










mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    App.listen(process.env.PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`DB is Connected and Your Server is listening on http://localhost:${process.env.PORT}`);
      }
    });
  })
  .catch((err) => {
    console.log("Error Connecting to DB", err);
  });



