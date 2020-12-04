const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/create', UserController.create);
routes.get('/', UserController.index);
routes.put('/update', UserController.update);
routes.delete('/del/:id', UserController.delete);

module.exports = routes;