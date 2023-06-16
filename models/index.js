const mongoose = require('mongoose');
const reminderSchema = new mongoose.Schema(
    {
        reminder:{
            type: String,
            required: [true, "The reminder needs content to be added"]
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

    }
);

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }, 
        email: {
            type: String,
            required: true
        }
    }
);

const reminder = mongoose.model('reminder', reminderSchema);
const user = mongoose.model('user', userSchema);
module.exports = {reminder, user};