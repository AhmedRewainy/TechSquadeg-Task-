const mongooseDB = require('mongoose');
const Schema = mongooseDB.Schema;

const dateSchema = new Schema({
    date: Date,
    x: { y: String }
});

const dateModel = mongooseDB.model('Date', dateSchema);

module.exports = dateModel;