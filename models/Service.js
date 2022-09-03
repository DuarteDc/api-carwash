const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    }


});

module.exports = model('Service', ServiceSchema);