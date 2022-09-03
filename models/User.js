const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
mongoose.Promise = global.Promise;

const UserSchema = Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: false,
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true,
    },
    type_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TypeUser",
        required: true,
    }
},

    {
        timestamps: true
    }
);

//Usar cuando las consultas de usuarios necesiten forzosamente id en vez de _id
UserSchema.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();
    object.id = _id;
    return object;
})

// Duplicate the ID field.
UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
UserSchema.set('toJSON', {
    virtuals: true
});

UserSchema.plugin(mongoosePaginate);

module.exports = model('User', UserSchema);