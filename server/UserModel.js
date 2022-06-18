const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    password: ({ type: String, required: true })
});

module.exports = mongoose.model('userData', mySchema);