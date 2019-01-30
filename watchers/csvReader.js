"use strict";
var fs = require('fs');
var jsonArrayService = require('../services/jsonArrayService');
var csvjson = require('csvjson');
var options = {
    delimiter: ',',
    quote: '"'
};

var csvReader = (filepath) => {
    fs.readFile(Buffer.from(filepath), 'utf8', (err, data) => {
        if (err) throw err;
        let jsonObject = csvjson.toObject(data, options);
        return jsonArrayService(jsonObject);
    });
};
module.exports = csvReader;
