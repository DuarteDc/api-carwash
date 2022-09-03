const { Schema, model } = require('mongoose');

const ModuleSchema = Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    },
    routes: [{
        name: {
            type: String,
            required: false
        },
        path: {
            type: String,
            required: false
        },
    }],
    status: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('Module', ModuleSchema);