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



  const compaintsPoles = new Schema({

    description:{
        type:String,
        required: false,
        trim: true,
    },
    picture:{
        type:String,
        required: false,
        trim: true,
    },
    pole:{
        type:String,
        required: getRequiredFiledMessage('Pole'),
        trim: true,
    },
    status:{
        type:String,
        required: getRequiredFiledMessage('Status'),
        trim: true,
    },
    type:{
        type:String,
        required: getRequiredFiledMessage('Type'),
        trim: true,
    },
    userid:{
        type:String,
        required: false,
        trim: true,
    },
  },options)

  module.exports = mongoose.model('complaintsPoles', compaintsPoles);