
var chokidar = require('chokidar');
var config = require('../setup/config');

var folderWatcher = chokidar.watch(config.dataInput.directory,
    {
        ignored: /(^|[\/\\])\../,
        persistent: true
    });

folderWatcher.on('add', (path, stats) => {
    console.log(path, stats);
});

module.exports = folderWatcher;