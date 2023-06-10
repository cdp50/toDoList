const mongoose = require('mongoose');
const model = require('../models/index');
const createError = require('http-errors');

const controller = {}

// GET ALL ITEMS
controller.getAllItems = async(req, res) => {
    try {
        const items = await model.find();
        console.log(items)
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// GET ONE ITEM
controller.getItem = async(req, res, next) => {
    try {
        const {id} = req.params
        const item = await model.findById(id);
        if(!item){
            throw createError(404, "Product does not exist");
        }else{
            res.status(200).json(item);
        }
    } catch (err) {
        // res.status(500).json({message: err.message})
        if(err instanceof mongoose.CastError){
            next(createError(400, "Invalid Item Id"))
            return
        }
        next(err)
    }
}

// POST ITEM
controller.addItem = async(req, res) => {
    try {
        const item = await model.create(req.result);
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// PUT ITEM
controller.editItem = async(req,res,next) => {
    try {
        const {id} = req.params;
        const item = await model.findByIdAndUpdate(id,req.result);
        if(!item){
            throw createError(404, "Product does not exist");
        }else{
            res.status(204).json(item);
        }
    } catch (err) {
        // res.status(500).json({message: err.message})
        if(err instanceof mongoose.CastError){
            next(createError(400, "Invalid Item Id"))
            return
        }
        next(err)
    }
}

// DELETE ITEM
controller.deleteItem = async(req,res,next) => {
    try {
        const {id} = req.params;
        const item = await model.findByIdAndDelete(id);
        if(!item){
            throw createError(404, "Product does not exist");
        }else{
            res.status(200).json(item);
        }
    } catch (err) {
        // res.status(500).json({message: err.message})
        if(err instanceof mongoose.CastError){
            next(createError(400, "Invalid Item Id"))
            return
        }
        next(err)
    }
}

module.exports = controller;