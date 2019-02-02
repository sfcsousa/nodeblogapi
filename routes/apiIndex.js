"use strict";
let express = require('express');
let router = express.Router();
let logger = require('morgan');

const blogController = require('./blogsRouter');
const indexController = require('./apiController');
const errorHandler = require('../handlers/errorHandler');

router.use(logger('tiny'));

router.use(indexController);

router.use('/v1/', blogController);

router.use(errorHandler.clientError, errorHandler.clientError);

module.exports = router;