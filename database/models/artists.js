'use strict';

const Schema = require('mongoose').Schema;

const ArtistSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    // required: true 
  },
  bio:{
  	type: String,
      lowercase: true,
  	unique: true,
  	// required: true
  },
  facebook:{
    type: String,
    lowercase: true,
    unique: true,
    required: false
  },
  discorgs:{
    type: String,
    lowercase: true,
    unique: true,
    required: false
  },
  residentA:{
    type: String,
    lowercase: true,
    unique: true,
    required: false
  },
  soundcloud:{
    type: String,
    lowercase: true,
    unique: true,
    required:false
  },
  events: {
  type: Array,
  unique: true,
  }
});

module.exports =  ArtistSchema;