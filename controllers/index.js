const model = require('../models/index');

const controller = {}

// GET ALL ITEMS
controller.getAllItems = async(req, res) => {
    try {
        const items = await model.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// GET ONE ITEM
controller.getItem = async(req, res) => {
    try {
        const {id} = req.params;
        const item = await model.findById(id);
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({message: err.message})
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
controller.editItem = async(req,res) => {
    try {
        const {id} = req.params;
        const item = await model.findByIdAndUpdate(id,req.result);
        res.status(204).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE ITEM
controller.deleteItem = async(req,res) => {
    try {
        const {id} = req.params;
        const item = await model.findByIdAndDelete(id);
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = controller;