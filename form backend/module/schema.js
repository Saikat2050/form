const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbSchema = new Schema({
    title: {type: String, required: true}, 
    address: {type: String, required: true},
    city: {type: String, required: true}, 
    indian: {type: String, required: true}, 
    suggest: {type: String, required: true}
}, { timestamps: true});
const Data = mongoose.model('Data', dbSchema);
module.exports = Data;