const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = ['apple', 'banana', 'cherry'];

app.get('/fruits', (req, res) => {
  res.send(fruits);
});

app.listen(PORT, () => {
    console.log('listening');
});