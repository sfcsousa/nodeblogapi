"use strict";
let blogRepository = require('../repository/blogPostRepository');
let omdbService = require('./omdbServices');
let titleNormalizer = require('../converter/titleConverter');

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
    else
        next(new Error("Informe um id para buscar"));
    let post = await blogRepository.getPostById(id);
    let movie = await omdbService(titleNormalizer(post.movieTitle));
    res.json({
        post: post, movie: movie
    });
    next();
};
let createNewPost = async (req, res, next) => {
    if (!req.body) {
        next(new Error("Informe um post para atualizar"));
    }
    let post = req.body;

    console.log('post ', post);

    let result = await blogRepository.saveNewPost(post);
    res.json(result);
    next();
}

let updatePost = async (req, res, next) => {
    if (!req.body) {
        next(new Error("Informe um post para atualizar"));
    }
    let post = req.body;
    let id = req.params.blog_id;

    let result = await blogRepository.updatePost(id, post);

    res.json({ updatedPost: result });
    next();
}

let deletePost = async (req, res, next) => {
    let id = '';
    if (req.params)
        id = req.params.blog_id;
    else
        next(new Error("Informe um id para excluir"));


    let result = await blogRepository.removePost(id);

    res.json({ removedPost: result });
    next();
}


module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createNewPost: createNewPost,
    updatePost: updatePost,
    deletePost: deletePost,
};