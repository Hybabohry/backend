'use strict';

const mongoose = require('mongoose');


const { Schema } = mongoose;
const options = {
  timestamps: true,
};



const admin = new Schema({

    userid: {
        type:String
    },
    munip: {
        type:String
    },
    gov :{
        type:String
    },
    email: {
        type:String
    },
    files: {
        type:Array
    },
    firstname: {
        type:String
    },
    lastname: {
        type:String
    }

},options);

module.exports = mongoose.model('admins', admin);