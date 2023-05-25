const routes = require('express').Router();
const controller = require('../controllers');
const itemValidation = require('../utilities/validation_schema')
// I have to add the itemSchema to the route as a middleware
// but I'm not sure how, I think I am going to need to create 
// a schema controller and that way I can call that function to
// be my middleware.
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


