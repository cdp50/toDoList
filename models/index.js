const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema(
    {
        item:{
            type: String,
            required: [true, "The item needs content to be added"]
        },
        check:{
            type: Boolean,
            required: false
        },
        title:{
            type: String,
            required: false
        },
        deadline:{
            type: String,
            required: false
        },
        place: {
            type: String,
            required: false
        },
        priority: {
            type: Boolean,
            required: false
        },
        reminder: {
            type: Boolean,
            required: false
        }

    },
    {
        timestamps: false,
    }
);

const item = mongoose.model('item', itemSchema);
module.exports = item;