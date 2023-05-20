const model = require('../models/index');

const controller = {}

// GET ALL ITEMS
controller.listItems = async(req, res) => {
    try {
        const items = await model.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// POST ITEM
controller.addItem = async(req,red) => {
    try {
        const item = await model.create(req.body);
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = controller;