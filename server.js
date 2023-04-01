const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = ['apple', 'banana', 'cherry'];
const magicArray = require('./models/magicBall');
app.get('/greeting', (req, res) => {
  res.send('Hello stranger');
});

app.get('/greeting/:name', (req, res) => {
    res.send('Good to see you ' + req.params.name);
  });

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = req.params.total * req.params.tipPercentage / 100;
    res.send('Your tip is '+ tip);
});

app.get('/magic/:randomQuestion', (req, res) => {
    let randomAnswer = magicArray[Math.floor(Math.random() * magicArray.length)];
    res.send(req.params.randomQuestion +": " + randomAnswer);
});


app.listen(PORT, () => {
    console.log('listening');
});