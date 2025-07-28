const { exec } = require('node:child_process');


const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.options('*', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
  });


app.post('*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });

app.post('/voice', (req, res) => {
  const {voice, text} = req.body
  console.info("Request with: voice:", voice, " and text ", text );
  exec(`say -v ${voice} '${text}'`)
  res.status(201).send();
})

app.listen(port, () => {
  console.log(`Voice server listening on port ${port}`)
})