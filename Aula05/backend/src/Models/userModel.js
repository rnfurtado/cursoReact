const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    login: String,
    password: {
        type: String,
        required: true,
    },
    sex: String,
    age: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);