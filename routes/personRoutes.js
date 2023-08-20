const router = require('express').Router();
const Person = require('../models/Person');

// Create 
router.post('/', async (req, res) => {
  const { name, salary, approved } = req.body;

  const person = { name, salary, approved };

  if (!name) {
    res.status(400).json({ error: 'Missing name, salary or approved' });
    return
  }

  try {
    await Person.create(person);

    res.status(201).json({ message: 'Person created!' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating person' });
  }
});

// Read
router.get('/', async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: 'Error getting people' });
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const person = await Person.findById(id);

    if (!person) {
      res.status(400).json({ error: 'invalid id' });
      return
    }

    res.status(200).json(person);
  }
  catch (error) {
    res.status(500).json({ error: 'Error getting person' });
  }
})

// Update (PUT, PATCH)

router.patch('/:id', async (req, res) => {
  const  { id }  = req.params;
  const { name, salary, approved } = req.body;

  const person = { name, salary, approved };

  try {
    const updatedPerson = await Person.findByIdAndUpdate(id, person);

    if (!updatedPerson) {
      res.status(422).json({ error: 'User not found' });
      return
    }

    res.status(200).json({ message: 'Person updated!' });
  }
  catch (error) {
    res.status(500).json({ error: 'Error updating person' });
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPerson = await Person.findByIdAndDelete(id);

    if (!deletedPerson) {
      res.status(422).json({ error: 'User not found' });
      return
    }

    res.status(200).json({ message: 'Person deleted!' });
  }
  catch (error) {
    res.status(500).json({ error: 'Error deleting person' });
  }
})

module.exports = router