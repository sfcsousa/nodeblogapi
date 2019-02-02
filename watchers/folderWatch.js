
var fileEx = require('fs');
var config = require('../setup/config');
var jsonReader = require('./jsonReader');
var csvConverter = require('./csvReader');

let path = require('path');

var folderWatcher = fileEx.watch(config.dataInput.directory,
    {
        persistent: true,
        recursive: false,
    },
    (eventname, filename) => {
        if (eventname == 'change') {

            let filepath = path.join(config.dataInput.directory, filename);
            console.log('ile path: ', filepath);
            if (filename.indexOf('.json') > 0) return jsonReader(filepath);
            else if (filename.indexOf('.csv') > 0) return csvConverter(filepath);
        }
    });

module.exports = () => folderWatcher;