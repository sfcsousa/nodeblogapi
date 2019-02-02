"use strict";
let fs = require('fs');
let unlinkFileFromPath = (filepath) => {
    fs.unlink(filepath, (err) => {
        if (err) throw err;
        console.log(filepath + ' foi deletado!');
    });
}

module.exports = unlinkFileFromPath;