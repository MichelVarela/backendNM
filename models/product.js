const { Schema, model } = require('mongoose');

const ProductSchema = Schema({

    name: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String
    },
    state:{
        type: Boolean,
        default: true
    }
});

module.exports = model('Product', ProductSchema);