const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Cat', 'Dog', 'Bird'],
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const Animal = mongoose.model('Animal', AnimalSchema);

module.exports = Animal;
