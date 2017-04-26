'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const ArtistSchema = require('./models/artists.js');

module.exports ={
	artists : mongoose.model('Artists', ArtistSchema)
} 