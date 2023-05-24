'use strict';

const mongoose = require('mongoose');


const { Schema } = mongoose;
const options = {
  timestamps: true,
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

  const PoubelleSchema = new Schema({
    name:{
        type:String,
        trim: true,
    },
    position: {
    
        type: pointSchema,
      
      },
      governorate:{
        type:String,
        trim: true,
    },
    municipality:{
        type:String,
        trim: true,
    },
    status:{ // excellent // full // broken
      type:String,
      trim:true
    }
  },options)

  module.exports = mongoose.model('Poubelles', PoubelleSchema);

