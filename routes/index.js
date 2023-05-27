const routes = require('express').Router();
const controller = require('../controllers');
const itemValidation = require('../utilities/validation_schema')
routes.use('/',require('./routes-swagger.js'));


routes.get('/', controller.getAllItems);
routes.get('/:id', controller.getItem);
routes.post('/',itemValidation.checkSchema, controller.addItem);
routes.put('/:id',itemValidation.checkSchema, controller.editItem);
routes.delete('/:id', controller.deleteItem);



module.exports = routes;


