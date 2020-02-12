require('dotenv').config();
const express = require('express');
const app = express();

app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name} it's so great to see you`)
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100
    res.send('The amount you should tip is ' + tip)
})



app.listen(3007, () => {
    console.log("Yes Dear")
});