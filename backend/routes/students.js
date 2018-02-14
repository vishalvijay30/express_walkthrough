const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

router.route('/')
    .post((req, res) => {
        console.log("reached /students endpoint with a POST request");
        const request = req.body;
        console.log("parsed request: ", request);
        res.send("Hello " + request.name + "! I see that you are a " + request.major + " major.");
    });

module.exports = router;