//NPM imports
const express = require('express');
const bodyParser = require('body-parser');

//local imports
const api = require('./backend/routes');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
    console.log("reached / endpoint!");
    res.send("Welcome to Bits of Good!");
});

app.get('/ping', (req, res) => {
    console.log("reached /ping endepoint!");
    res.send("pong");
});

// app.post('/students', (req, res) => {
//     console.log("reached /students endpoint with a POST request");
//     const request = req.body;
//     console.log("parsed request: ", request);
//     res.send("Hello " + request.name + "! I see that you are a " + request.major + " major.");
// });

app.use('/api', api);

app.listen(3000, () => {
    console.log("listening at port", port);
});