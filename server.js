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

app.get('/:bottles', (req, res) => {
    req.params.bottles = parseInt(req.params.bottles);
    let bottles = req.params.bottles;
    res.send(
        bottles > 0 ? bottles + ' Bottles of Beer on the wall' + '<br/>' +`<a  href='/${bottles - 1}'>Take One down pass it around</>` : bottles + ' Bottles of Beer on the wall'+ '<br/>' +`<a  href='/${bottles + 99}'>No more beers left on the wall let's go to the store and get 99 more</>`
        );
});


// app.post('/:bottles', (req, res) => {

// res.redirect('/:bottles');
// });

app.listen(PORT, () => {
    console.log('listening');
});