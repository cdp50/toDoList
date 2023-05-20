const routes = require('express').Router();
const controller = require('../controllers');


routes.get('/', controller.listItems);
routes.post('/addItem', controller.addItem);


module.exports = routes;

// FALTA EL SWAGGER, COMO HACER QUE SE CREE DE NUEVO?
// FALTA VER QUE FUNCTIONE EN LOCAL
// FALTA HACER UN RENDER
// FALTA QUE ANDE EN RENDER
// FALTA QUE ANDE SWAGGER EN RENDER
// FALTA HACER UN ROUTES.REST PARA LAS RUTAS
// FALTA EL VIDEO

