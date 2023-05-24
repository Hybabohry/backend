'use strict';

const mongoose = require('mongoose');


const { Schema } = mongoose;
const options = {
  timestamps: true,
};



  const NotesSchema = new Schema({
    data:{
        type:String,
        trim: true,
    },
    municipality:{
        type:String,
        trim: true,
    },
    color:{
        type:Number,
        trim: true,
    }
  },options)

  module.exports = mongoose.model('Notes', NotesSchema);

