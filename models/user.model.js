

// const { string } = require('joi');
const { number } = require('joi');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String,
    emailConfirm:{
        type: Boolean,
        default:false,
    },
    
});

module.exports=mongoose.model('user',schema);