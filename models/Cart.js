const { Schema, model } = require('mongoose');

const CartSchema = Schema({
    products: [{
        product_id: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: false
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    client_id: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("Cart", CartSchema);