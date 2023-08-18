const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('http://localhost:3000');
})



