"use strict";
let clientError = (err, req, res, next) => {
    res.status(500)
    res.status(500).send({ error: err.message })
};

let loggerError = (err, req, res, next) => {
    res.status(500)
    console.error('Erro: ' + err.stack);
    next(err);
};

module.exports = { loggerError, clientError };