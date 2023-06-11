const routes = require('express').Router();
const controller = require('../controllers');
const itemValidation = require('../utilities/validation_schema');

const { requiresAuth } = require('express-openid-connect');


// get all items
routes.get('/',requiresAuth(), (req, res) => {
    if (req.oidc.isAuthenticated()){
        controller.getAllItems(req, res) 
    } else {
        res.redirect('/login');
    }
    });
// get item by id
routes.get('/:id', requiresAuth(), (req, res, next) => {
    if (req.oidc.isAuthenticated()){
        controller.getItem(req, res, next);
        console.log(JSON.stringify(req.oidc.user)); 
    } else {
        res.redirect('/login');
    }
});
// post new item
routes.post('/', requiresAuth(), itemValidation.checkItemSchema, (req, res) => {
    if(req.oidc.isAuthenticated()) {
        controller.addItem(req, res);
    } else {
        res.redirect('/login');
    }
});
// edit item
routes.put('/:id',requiresAuth(), itemValidation.checkItemSchema, (req, res, next) => {
    if(req.oidc.isAuthenticated()) {
        controller.editItem(req, res, next);
    } else {
        res.redirect('/login');
    }
});
// delete item
routes.delete('/:id', requiresAuth(), (req, res, next) => {
    if(req.oidc.isAuthenticated()) {
        controller.deleteItem(req, res, next);
    } else{
        res.redirect('/login');
    }
});

module.exports = routes;