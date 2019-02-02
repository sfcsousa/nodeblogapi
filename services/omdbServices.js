"use strict";
const omdbConfig = require('../setup/config').omdb;
const axios = require('axios');
const qs = require('querystring');
let getMovieInfo = async (movieTitle, ) => {
    let params = {
        apikey: omdbConfig.apikey,
        t: movieTitle,
    }
    let result = await axios.get(omdbConfig.url + "?" + qs.stringify(params))
        .catch(error => {
            throw error;
        });
    return result.data;
}

module.exports = getMovieInfo;