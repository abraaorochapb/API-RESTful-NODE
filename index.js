const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect('mongodb+srv://abraaorochapb:Abra&120@cluster0.d3rgnx0.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected to MongoDB')
  app.listen(3000)
})
.catch((err) => {
  console.log(err)
})



