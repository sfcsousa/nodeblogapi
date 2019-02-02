"use strict";
let fs = require('fs');
let jsonArrayService = require('../services/jsonArrayService');
let fileUnlinker = require('./fileUnliker');


let jsonReader = (filepath) => {
    fs.readFile(Buffer.from(filepath), 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Arquivo lido com sucesso!', filepath);
        let jsonObject = JSON.parse(data);
        fileUnlinker(filepath);
        return jsonArrayService(jsonObject);
    });
};

module.exports = jsonReader;


