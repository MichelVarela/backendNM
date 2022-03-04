const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    name: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Campo obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Campo obligatorio'],
    },
    img:{
        type: String
    },
    rol:{
        type: String,
        required: true,
        default: 'USER_ROLE',
        enum: ['ADMIN_ROLE','USER_ROLE']
    },
    state:{
        type: Boolean,
        default: true
    },
    google: {
        type:Boolean,
        default: false
    }
});

module.exports = model('User', UserSchema);