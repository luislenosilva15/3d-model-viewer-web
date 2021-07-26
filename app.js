const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 3000;
var cors = require('cors')

var key = fs.readFileSync('selfsigned.key');
var cert = fs.readFileSync('selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

app = express()
app.use(cors())
app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, text) => {
        res.send(text);
    });
});

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});