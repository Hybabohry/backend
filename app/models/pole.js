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

  const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });
  const PoleSchema = new Schema({
    name:{
        type:String,
        required: getRequiredFiledMessage('Name'),
        trim: true,
    },
    status:{
        type:String,
        required: getRequiredFiledMessage('Status'),
        trim: true,
    },
    position: {
    
        type: pointSchema,
      
        required: getRequiredFiledMessage('Position'),
      },
      governorate:{
        type:String,
        required: getRequiredFiledMessage('Governorate'),
        trim: true,
    },
    municipality:{
        type:String,
        required: getRequiredFiledMessage('Municipality'),
        trim: true,
    },
    chars:{
      type:String,
      trim:true
    }

  },options)

  module.exports = mongoose.model('Pole', PoleSchema);



