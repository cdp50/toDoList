const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema(
    {
        item:{
            type: String,
            required: [true, "The item needs content to be added"]
        }
    },
    {
        timestamps: true,
    }
);

const item = mongoose.model('item', itemSchema);
module.exports = item;