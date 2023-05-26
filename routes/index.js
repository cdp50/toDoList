const routes = require('express').Router();
const controller = require('../controllers');
const itemValidation = require('../utilities/validation_schema')
// the video
// https://www.youtube.com/watch?v=u9kxYilQ9l8
// the homework instructions
// https://cse341.netlify.app/lesson6/assignment
// the reading content
// https://cse341.netlify.app/lesson6/reading


routes.get('/', controller.getAllItems);
routes.get('/:id', controller.getItem);
routes.post('/',itemValidation.checkSchema, controller.addItem);
routes.put('/:id',itemValidation.checkSchema, controller.editItem);
routes.delete('/:id', controller.deleteItem);



module.exports = routes;


