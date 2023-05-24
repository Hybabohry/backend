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

  const article = new Schema({
    titre:{
      type:String
    },
    description:{
      type:String
    },
    date_publication:{
      type:Date,
      default: Date.now()
    },
    munip:{
      type:String
    },
    images:{
      type:String
    },
  },options)

  module.exports = mongoose.model('articles', article);

  /*
   ( article : titre , description , date_publication , heure_publication , image(s) )*/