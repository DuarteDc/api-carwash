const { Schema, model } = require('mongoose');

const TypeCarSchema = Schema({

    type: {
        type: String,
        required: true,
    },
    services: [{
        service_id: {
            type: Schema.Types.ObjectId,
            ref: 'Service'
        },
        price: {
            type: Number,
            required: true,
        },
    }],
    status: {
        type: Boolean,
        default: true,
    }

});

module.exports = model('TypeCar', TypeCarSchema);