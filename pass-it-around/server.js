const express = require('express')
const app = express()
const port = 3008

app.get('/:number', (req, res) => {
    let draw = Math.random()
    let iteration = parseInt(req.params.number)-1
    if (draw > .9) {
        bugs = Math.floor(Math.random() * 20)
        iteration += bugs
    }
    res.send(`
        <html>
            <body>
                <p>${req.params.number} little bugs in the code</p>
                <p>${req.params.number} little bugs</p>
                <p>take one down</p>
                <p>patch it around</p>
                <a href='/${iteration}'>${iteration} bugs in the code</a>
            </body>
        </html>
    `)
})

app.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <p>99 little bugs in the code</p>
            <p>99 little bug</p>
            <p>take one down</p>
            <p>patch it around</p>
            <a href='/98'>98 bugs in the code</a>
            </body>
            </html>
            `)
});

app.get('/0', (req, res) => {
    res.send(`
        <html>
            <body>
                <a href='/99'>Start over?</a>
            </body>
        </html>    
    `)
})

app.listen(port, () => {
    console.log('running on' , port)
})