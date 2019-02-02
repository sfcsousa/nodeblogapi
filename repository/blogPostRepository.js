"use strict";
let conn = require('../factories/connectionFactory');
let blogPostModel = require('../models/blogPost');
let postConverter = require('../converter/blogConverter');

let saveNewPost = async function (post) {
    let db = conn();
    let Blog = blogPostModel(db);
    post = postConverter(post);
    let newPost = new Blog(post);
    newPost.save((err, post) => {
        if (err) throw err;
        db.close();
    });
    return newPost;
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
    let result = await Blog.findById(id).lean();
    return result;

};

let updatePost = async (id, post) => {
    let db = conn();
    let Blog = blogPostModel(db);

    let query = {
        _id: id
    };
    let options = {
        runValidators: true,
        new: true
    }

    let result = await Blog.findOneAndUpdate(query, post, options).exec();
    console.log('updated: ', result);
    return result;
};

let removePost = async (id) => {
    let db = conn();
    let Blog = blogPostModel(db);

    let query = {
        _id: id
    };
    let options = {
    }

    let result = await Blog.findOneAndDelete(query, options).exec();
    console.log('deleted: ', result);
    return result;
};


module.exports = {
    saveNewPost: saveNewPost,
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    updatePost: updatePost,
    removePost: removePost,
};