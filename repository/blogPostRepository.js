"use strict";
let conn = require('../factories/connectionFactory');
let blogPostModel = require('../models/blogPost');
let postConverter = require('../converter/blogConverter');

let saveNewPost = function (post) {
    let db = conn();
    let Blog = blogPostModel(db);
    post = postConverter(post);
    let newPost = new Blog(post);
    newPost.save((err) => {
        if (err) throw err;
        db.close();
    });
};
let customLabels = {
    totalDocs: 'total',
    docs: 'data',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev'
};
let options = {
    page: 1,
    limit: 30,
    lean: true,
    select: {
    },
    customLabels: customLabels
}
let getAllPosts = async function (page) {
    let db = conn();
    let Blog = blogPostModel(db);
    if (page != '')
        options.page = page;
    let result = await Blog.paginate({}, options);
    return result;

};


let getPostById = async function (id) {
    let db = conn();
    let Blog = blogPostModel(db);
    console.log('id: ', id);
    let result = await Blog.findById(id).lean();
    return result;

};

module.exports = {
    saveNewPost: saveNewPost,
    getAllPosts: getAllPosts,
    getPostById: getPostById,
};