const express = require('express');
const app = express();
const port = 3007;

app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name} it's so great to see you`)
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100
    res.send('The amount you should tip is ' + tip)
})

app.get('/magic/:question', (req, res) => {
    let arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let num = Math.floor(Math.random() * arr.length)
    let answer = arr[num]
    res.send(`
        <html>
            <body>
                ${req.params.question}
                <h1>${answer}</h1>
            </body>
        </html>
    `)
})

app.listen(port, () => {
    console.log("Yes Dear")
});