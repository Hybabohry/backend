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


const UserSchema = new Schema({
  userid: {
    type:String,
    required: getRequiredFiledMessage('Id'),
    unique:true,
  },
  gov: {
    type: String,
    required: getRequiredFiledMessage('Gouvernorat'),
    trim: true,
  },
  munip: {
    type: String,
    required: getRequiredFiledMessage('Municipalite'),
    trim: true,
  },
  avatar: {
    type: String,
    required: false,
    trim: true,
  },
  firstname: {
    type: String,
    required: getRequiredFiledMessage('Firstname'),
    trim: true,
  },
  lastname: {
    type: String,
    required: getRequiredFiledMessage('Lastname'),
    trim: true,
  },
  phonenumber: {
    type: String,
    required: getRequiredFiledMessage('Phone Number'),
    trim: true,
  },

  adress: {
    
    type: pointSchema,
  
    required: getRequiredFiledMessage('Adresse Geographique'),
  },

}, options);

module.exports = mongoose.model('users', UserSchema);
