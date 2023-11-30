const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    isValidated { type: String, default: true }
});

const User = model('user', userSchema);

module.exports = User;