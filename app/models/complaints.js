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



  const complaints = new Schema({
    userid:{
        type:String,
        required: false,
        trim: true,
    },
    photoUrl:{
        type:String,
        required: false,
        trim: true,
    },
    description:{
        type:String,
        required: getRequiredFiledMessage("Description"),
        trim: true,
    },
    status:{
        type:String,
        required: getRequiredFiledMessage("status"),
        trim: true,
    },
    municipality:{
      type:String,
      required: getRequiredFiledMessage("Municipality"),
      trim: true,
    }
  },options);

  module.exports = mongoose.model('complaints', complaints);