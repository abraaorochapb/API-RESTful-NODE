const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person = require('./models/Person');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({message : 'Server is running!'})
})

app.post('/person', async (req, res) => {
  const { name, salary, approved } = req.body;

  const person = { name, salary, approved };

  try {
    await Person.create(person);

    res.status(201).json({ message: 'Person created!' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating person' });
  }
});


mongoose.connect('mongodb+srv://abraaorochapb:Abra&120@cluster0.d3rgnx0.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected to MongoDB')
  app.listen(3000)
})
.catch((err) => {
  console.log(err)
})