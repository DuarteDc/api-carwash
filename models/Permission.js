const { Schema, model } = require('mongoose');

const PermissionSchema = Schema({
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
    }]
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("Permission", PermissionSchema);