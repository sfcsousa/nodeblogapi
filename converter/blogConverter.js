module.exports = (object) => {
    //object.controllerId = object.id;
    delete object.id;
    return object;
};