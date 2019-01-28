var blogPostRepository = require('../repository/blogPostRepository');
var jsonArrayService = function (jsonArray) {

    jsonArray.forEach((element, key) => {

        blogPostRepository.saveNewPost(element);
    });
};


module.exports = jsonArrayService;