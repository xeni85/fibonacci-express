const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = ['apple', 'banana', 'cherry'];

app.get('/greeting', (req, res) => {
  res.send('Hello stranger');
});

app.get('/greeting/:name', (req, res) => {
    res.send('Good to see you ' + req.params.name);
  });

app.listen(PORT, () => {
    console.log('listening');
});