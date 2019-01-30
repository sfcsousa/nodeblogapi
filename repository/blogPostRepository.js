var conn = require('../factories/connectionFactory');
var blogModel = require('../models/blogPost');
var postConverter = require('../converter/blogConverter');

var saveNewPost = function (post) {
    var db = conn();
    var Blog = blogModel(db);
    post = postConverter(post);
    var newPost = new Blog(post);

    newPost.save((err) => {
        if (err) throw err;
        db.close();
    });
};

module.exports = {
    saveNewPost: saveNewPost,
};