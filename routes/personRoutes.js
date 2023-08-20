const router = require('express').Router();
const Person = require('../models/Person');

router.post('/', async (req, res) => {
  const { name, salary, approved } = req.body;

  const person = { name, salary, approved };

  try {
    await Person.create(person);

    res.status(201).json({ message: 'Person created!' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating person' });
  }
});

module.exports = router