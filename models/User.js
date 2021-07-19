const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}); 

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }

    const saltRounds = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});

userSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.getSignedToken = function() {
    return jwt.sign(
        { id: this._id}, 
        config.get('jwtSecret'), 
        { expiresIn: 3600 }
    )
}

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;