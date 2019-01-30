
var fileEx = require('file-system');
var config = require('../setup/config');
var jsonReader = require('./jsonReader');
var csvConverter = require('./csvReader');

var folderWatcher = fileEx.recurse(config.dataInput.directory,
    ['*.csv', '*.json'],
    (filepath, relative, filename) => {
        if (filename.indexOf('.json') > 0) return jsonReader(filepath);
        else if (filename.indexOf('.csv') > 0) return csvConverter(filepath);
    });

module.exports = () => folderWatcher;