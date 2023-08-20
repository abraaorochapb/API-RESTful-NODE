const express = require('express');
const app = express();
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');
require ('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/person', personRoutes);


app.get('/', (req, res) => {
  res.json({message : 'Server is running!'})
})

// variaveis DB
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(`mongodb+srv://abraaorochapb:${DB_PASSWORD}@cluster0.d3rgnx0.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log('Connected to MongoDB')
  app.listen(3000)
})
.catch((err) => {
  console.log(err)
})