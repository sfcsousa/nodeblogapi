"use strict";
let blogRepository = require('../repository/blogPostRepository');

let getAllPosts = async (req, res, next) => {
    let page = '';

    if (req.query)
        page = req.query.page;

    let result = await blogRepository.getAllPosts(page);
    delete result.pagingCounter;
    res.json(result);
    next();

};

let getPostById = async (req, res, next) => {
    let id = '';
    if (req.params)
        id = req.params.blog_id;

    let result = await blogRepository.getPostById(id);
    res.json(result);
    next();

};


module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById
};