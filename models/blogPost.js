var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
const emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const blogPostSchema = new Schema({
    id: ObjectId,
    controllerId: String,
    title: String,
    postContent: String,
    author: {
        type: String,
        required: [true, 'informe um email!'],
        validate: {
            validator: function (v) {
                return emailRegEx.test(v);
            }
        }

    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    movieTitle: String,
    comments: Array
});

var blogPostModel = (db) => {
    let model = db.model('Blog', blogPostSchema);
    return model;
};

module.exports = blogPostModel;