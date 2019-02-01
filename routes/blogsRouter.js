"use strict";
let express = require('express');
let router = express.Router();
let blogService = require('../services/blogService');


router.route('/blog/:blog_id')
    .get((req, res, next) => {
        blogService.getPostById(req, res, next);
    })
    .put((req, res, next) => {

    })
    .post((req, res, next) => {

    })
    .delete((req, res, next) => {

    });

router.route('/blogs').get(function (req, res, next) {
    blogService.getAllPosts(req, res, next);
});

module.exports = router;