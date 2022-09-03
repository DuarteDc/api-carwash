const { Schema, model } = require('mongoose');

const BrandSchema = Schema({
    name: {
        type: String,
        required: true
    },
    image: {
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

module.exports = mongoose.model("Brand", BrandSchema);