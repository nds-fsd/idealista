const { model, Schema } = require('mongoose');

const realtorSchema = new Schema({

    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    location: {type: String, required: true},
    ranking: {type: Number, required: true}
})

const Realtor = model('realtor', realtorSchema);

module.exports = Realtor;


