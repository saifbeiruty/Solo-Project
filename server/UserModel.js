const mongoose = require('mongoose');

const mySchema2 = new mongoose.Schema({
    name: { type: String, required: true},
    password: { type: String, required: true },
    // stockNames: { type: [String], unique: false },
    // stockData: { type: [Number], unique: false }
});

module.exports = mongoose.model('userData2', mySchema2);