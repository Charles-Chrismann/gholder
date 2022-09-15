
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const fs = require('fs');
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/random', function (req, res) {
    fs.readdir('./images', (err, files) => {
        console.log(files.length);
        res.sendFile('images/' + files[getRandomInt(files.length)], { root: __dirname });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

