var blogPostRepository = require('../repository/blogPostRepository');
var jsonArrayService = function (jsonArray) {

    jsonArray.forEach((element, key) => {

        if (typeof element.comments == "string") {
            element.comments = JSON.parse(element.comments);
        }
        blogPostRepository.saveNewPost(element);
    });
};


module.exports = jsonArrayService;