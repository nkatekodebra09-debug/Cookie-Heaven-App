const mongoose = require('mongoose');

const cookieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true, 
    },

    price: {
        type: Number,
        required: true,
    },

    stock: {
        type: Number,
        required: true,
    },

    image: String,
});

module.exports = mongoose.model('Cookie', cookieSchema);