const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    name: {type: String, required: true},
    state: {type: String, required: true},
    population: Number
})

const City = mongoose.model('City', citySchema);
module.exports = City;
