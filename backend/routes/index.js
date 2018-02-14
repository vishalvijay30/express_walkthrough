//npm imports
const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');

//local imports
const students = require('./students');
const meetings = require('./meetings');

// //middleware configuration
// router.use(bodyParser.json());

//define RESTful endpoints
router.use('/students', students);
router.use('/meetings', meetings);

module.exports = router;