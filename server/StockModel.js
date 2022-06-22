const mongoose = require('mongoose');

const myStockSchema = new mongoose.Schema({
    stockName: {type: String},
    dataa: {type: [Number]}
})

module.exports = mongoose.model('stockData', myStockSchema);