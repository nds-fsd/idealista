const { model, Schema } = require('mongoose');

const realtorSchema = new Schema({
    realtorName: {type: String, required: true},
    realtorPhone: {type: String, required: true},
    realtorEmail: {type: String, required: true},
    realtorLocation: {type: String, required: true},
    realtorRanking: {type: Number, required: true}
})

const Realtor = model('realtor', realtorSchema);

module.exports = Realtor;


