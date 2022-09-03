const { Schema, model } = require('mongoose');

const PermissionsSchema = Schema({
    write: {
        type: Boolean,
        default: false
    },
    update: {
        type: Boolean,
        default: false
    },
    delete: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

const ModulesSchema = Schema({
    module_id: {
        type: Schema.Types.ObjectId,
        ref: "Module",
        required: false
    },
    name: {
        type: String,
        required: true
    },
    permissions: PermissionsSchema
}, {
    versionKey: false,
    timestamps: true
});

const TypeUserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    modules: [ModulesSchema],
    status: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("TypeUser", TypeUserSchema);