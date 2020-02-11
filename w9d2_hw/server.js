require('dotenv').config();
const express = require('express');
const app = express();

app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name} it's so great to see you`)
});





app.listen(3007, () => {
    console.log("Yes Dear")
});