"use strict";
let express = require('express');
let router = express.Router();
let blogService = require('../services/blogService');


router.route('/posts/:blog_id')
    .get((req, res, next) => {
        blogService.getPostById(req, res, next);
    })
    .put((req, res, next) => {
        blogService.updatePost(req, res, next);
    })
    .delete((req, res, next) => {
        blogService.deletePost(req, res, next);
    });

router.route('/posts')
    .get(function (req, res, next) {
        blogService.getAllPosts(req, res, next);
    })
    .post((req, res, next) => {
        blogService.createNewPost(req, res, next);
    });

module.exports = router;