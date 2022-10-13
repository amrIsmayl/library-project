
const { string } = require("joi");
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    author:String,
    title: String,
    desc: String,
    quantity: Number,
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
}, {
    timesamps: true
});

module.exports = mongoose.model('book', schema);