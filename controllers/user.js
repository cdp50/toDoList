const mongoose = require('mongoose');
const userModel = require('../models/index');
const model = userModel.user;
const createError = require('http-errors');

const controller = {}

controller.addUser = async(req, res) => {
    try {
        console.log(req.result)
        const user = await model.create(req.result);
        console.log(user)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// DELETE ITEM
controller.deleteUser = async(req,res,next) => {
    try {
        const {id} = req.params;
        console.log(req.params.id)
        const user = await model.findByIdAndDelete(id);
        console.log(user)
        if(!user){
            throw createError(404, "User does not exist");
        }else{
            res.status(200).json(user);
        }
    } catch (err) {
        if(err instanceof mongoose.CastError){
            next(createError(400, "Invalid User Id"))
            return
        }
        next(err)
    }
};

// no necesito get solo necesito put y delete. la idea es hacer el 
// que el correo del usuario sea un field en "item" y que cuando llame a 
// getAllitems en realidad este llamando a todos los items con el coreo del 
// user. 
// y cuando haga un delete de user antes de hacer el delete tengo que 
// hacer un delete de todos los items relacionados con ese user. 



module.exports = controller;