const { Schema, model, Promise } = require('mongoose');
Promise = global.Promise;

const mongoosePaginate = require('mongoose-paginate-v2');


const ProductSchema = Schema({
    barcode: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    multimedia: [{
        path: {
            type: String
        }
    }],
    principalImage: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    price_purchase: {
        type: Number,
        required: false
    },
    discount: {
        type: Number,
        required: false,
        default: 0
    },
    product_key: {
        type: String,
        required: false
    },
    sku: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});

ProductSchema.plugin(mongoosePaginate);

module.exports = model('Product', ProductSchema);