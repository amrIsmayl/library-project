const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    addrss: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
        
        // required: true
    },
    book: [{
        type: mongoose.Types.ObjectId,
        ref: 'book'
        // required: true
    }]
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('invoice', schema);
