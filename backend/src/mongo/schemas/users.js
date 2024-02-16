const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String },
    isValidated: { type: Boolean, default: true },
});

userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.generateJWT=function() {
    const today = new Date();
    const expirationDate= new Date();

    expirationDate.setDate(today.getDate()+60);

    let payload ={
        id:this._id,
        name:this.name,
        email:this.email,
    };
    return jwt.sign(payload,secret,{
        expiresIn:parseInt(expirationDate.getTime()/1000,10)
    })
    
}

const User = model('user', userSchema);

module.exports = User;