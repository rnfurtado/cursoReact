const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    status : String,
    data: Number,   
    message : String, 
    count : Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('GMaps', userSchema);