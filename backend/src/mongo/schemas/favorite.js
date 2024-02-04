const { Schema, model } = require('mongoose');


const favoriteSchema = new Schema({
    realEstate: {
        type: Schema.Types.ObjectId,
        ref: "realestate",
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    }
});

favoriteSchema.index({ realEstate: 1, user: 1 }, { unique: true })

const Favorite = model('favorite', favoriteSchema);

module.exports = Favorite;