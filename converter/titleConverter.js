module.exports = (movieTitle) => {

    if (movieTitle.indexOf(',') > -1) {
        return movieTitle.split(',')[0];
    } else
        return movieTitle;

};