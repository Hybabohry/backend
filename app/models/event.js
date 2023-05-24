'use strict';

const mongoose = require('mongoose');


const { Schema } = mongoose;
const options = {
  timestamps: true,
};

const getRequiredFiledMessage = (filed) => {
    const message = `${filed} Should Not Be Empty`;
    return [true, message];
  };


  const event = new Schema({
    subject:{
        type:String
    },
    location:{
        type:String
    },
    munip:{
        type:String
    }
    ,
    image:{
        type:String
    }
    ,
    start:{
        type:Date
    },
    end:{
        type:Date
        }
    ,
    isAllDay:{
        type:Boolean
    }
  },options)

  module.exports = mongoose.model('events', event);