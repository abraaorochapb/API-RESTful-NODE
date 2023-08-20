const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({message : 'Server is running!'})
})

module.exports = routes