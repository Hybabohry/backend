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

  const groupMessage = new Schema({
    message:{

      type:String
      
    },
    sender:{

      type:String

    },
    munip:{

      type:String

    }
  },options)


  module.exports = mongoose.model('groupMessages', groupMessage);