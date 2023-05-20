const routes = require('express').Router();
const controller = require('../controllers');


routes.get('/', controller.listItems);
routes.post('/addItem', controller.addItem);


module.exports = routes;


