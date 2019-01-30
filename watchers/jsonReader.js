
var fs = require('fs');
var jsonArrayService = require('../services/jsonArrayService');

var jsonReader = (filepath) => {
    fs.readFile(Buffer.from(filepath), 'utf8', (err, data) => {
        if (err) throw err;
        let jsonObject = JSON.parse(data);
        return jsonArrayService(jsonObject);
    });
};

module.exports = jsonReader;


