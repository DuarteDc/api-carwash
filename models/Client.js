
const { Schema, model, Promise } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
Promise = global.Promise;


const VerifyPhoneNumberSchema = Schema({
    code: {
        type: String,
        required: false,
    },
    prefix: {
        type: String,
        required: false,
    },
    phone_number: {
        type: String,
        required: false,
    },
    expiration_date: {
        type: Date,
        required: false,
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
},
    {
        timestamps: true
    }
);

const ClientSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    privacity: {
        type: Boolean,
        default: true,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    stripe_customer: {
        type: String,
        required: false
    },
    profileImage: {
        type: String,
        required: false,
    },
    google: {
        type: Boolean,
        default: false
    },
    phone: VerifyPhoneNumberSchema,
    type_client_id: {
        type: Schema.Types.ObjectId,
        ref: 'TypeClient',
        required: true,
    },
    payment_method: {
        type: String,
        enum: ['card', 'cash'],
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    email_verified: {
        type: Boolean,
        default: true
    },
    facturapi_id: {
        type: String,
        required: false
    }
},
    {
        timestamps: true
    }
);

//Usar cuando las consultas de usuarios necesiten forzosamente id en vez de _id
ClientSchema.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();
    object.id = _id;
    return object;
})

// Duplicate the ID field.
ClientSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ClientSchema.set('toJSON', {
    virtuals: true
});

ClientSchema.plugin(mongoosePaginate);

module.exports = model('Client', ClientSchema);