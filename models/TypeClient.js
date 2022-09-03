const { Schema, model } = require('mongoose');

const TypeClientSchema = Schema({

    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    }

});

module.exports = model('TypeClient', TypeClientSchema);