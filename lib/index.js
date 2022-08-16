const {email} = require('./email');
const objects = require('./objects');

module.exports = {
    email,
    ...objects
};