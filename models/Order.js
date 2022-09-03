const { Schema, model } = require('mongoose');

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


const OrderSchema = Schema({

    type: {
        type: String,
        required: true,
    },
    wash: ServiceSchema,
    subtotal: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    }

});

module.exports = model('Order', OrderSchema);