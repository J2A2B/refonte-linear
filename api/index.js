'use strict';

// Router = express.Router
// import {Router} from 'express';
const Router = require('express').Router;
const bodyParser = require('body-parser');

const apiRoutes = new Router();

apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

const artistController = require('./controllers/artists');

apiRoutes.get('/artists', artistController.find);
apiRoutes.post('/artists', artistController.add);

apiRoutes.use('/api', apiRoutes);

//apiRoutes.post('/artists', artistController.create);

module.exports = apiRoutes;