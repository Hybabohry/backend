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



  const compaintsPoubelle = new Schema({
   

    poubelle:{
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
    municipality:{
        type:String,
        trim:true
    }
  },options)

  module.exports = mongoose.model('complaintsPoubelles', compaintsPoubelle);