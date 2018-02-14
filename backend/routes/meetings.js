const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

const router = express.Router();
router.use(bodyParser.json());

router.route('/')
    .post([
        check('event').exists(),
        check('location').exists()
        ], (req, res) => {
            console.log("reached /students endpoint with a POST request");
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.mapped() });
            }
            const request = matchedData(req);
            console.log("parsed request: ", request);
            res.send("Welcome to " + request.event + "! It's happening at " + request.location);
        });

module.exports = router;