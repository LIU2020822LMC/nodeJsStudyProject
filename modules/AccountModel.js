const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
    },
    type: {
        type: Number,
        default: -1,
    },
    account: {
        type: Number,
        required: true,
    },
    remarks: {
        type: String,
    }
})

const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;