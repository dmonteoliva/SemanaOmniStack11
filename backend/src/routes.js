const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const LoginController = require('./controllers/LoginController');

const OngValidator = require('./validators/ongValidator');
const IncidentValidator = require('./validators/incidentValidator');
const ProfileValidator = require('./validators/profileValidator');
const LoginValidator = require('./validators/loginValidator');

const routes = express.Router();

routes.post('/login', LoginValidator.get, LoginController.create);
routes.get('/profile', ProfileValidator.get, ProfileController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator.create, OngController.create);

routes.get('/incidents', IncidentValidator.get, IncidentController.index);
routes.post('/incidents', IncidentValidator.create, IncidentController.create);
routes.delete('/incidents/:id', IncidentValidator.delete, IncidentController.delete);

module.exports = routes;