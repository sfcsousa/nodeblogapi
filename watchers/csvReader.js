"use strict";
var fs = require('fs');
var jsonArrayService = require('../services/jsonArrayService');
var csvjson = require('csvjson');
let fileUnlinker = require('./fileUnliker');
var options = {
    delimiter: ',',
    quote: '"'
};

var csvReader = (filepath) => {
    fs.readFile(Buffer.from(filepath), 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Arquivo lido com sucesso!', filepath);
        fileUnlinker(filepath);
        let jsonObject = csvjson.toObject(data, options);
        return jsonArrayService(jsonObject);
    });
};
module.exports = csvReader;
