const { Schema, model } = require('mongoose');


const favoriteSchema = new Schema({
    realEstateDetails: {
        type: Schema.Types.ObjectId,
        ref: "realestate",
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    }
});

const Favorite = model('favorite', favoriteSchema);

module.exports = Favorite;