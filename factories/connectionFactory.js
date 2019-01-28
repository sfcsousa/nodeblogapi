var mongoose = require('mongoose');
var setup = require('../setup/config');

var connectionHandler = () => {
    console.log('Conectado... ');
}
var errorHandler = (err) => {
    throw err;
}

var connectionFactory = function () {
    let c = setup.connection;
    let uri = `mongodb://${c.host}:${c.port}/${c.database}`
    let conn = mongoose.createConnection(uri, {
        useNewUrlParser: true,
        socketTimeoutMS: 45 * 1000,
    });
    return conn;
}

module.exports = connectionFactory;