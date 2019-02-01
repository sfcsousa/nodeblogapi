"use strict";
let express = require('express');
let router = express.Router();
let logger = require('morgan');

const blogController = require('./blogsRouter');
const indexController = require('./apiController');

router.use(logger('tiny'));

router.use(indexController);

router.use('/v1/', blogController);

module.exports = router;