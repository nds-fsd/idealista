const { model, Schema } = require('mongoose');

const realEstateSchema = new Schema({
    realEstateType: {type: String, required: true},
    realEstateSubtype: {type: String, required: true},
    operation: {type: String, required: true},
    shortDescription: {type: String, required: true},
    description: {type: String, required: false},
    location: {type: String, required: true},
    roadName: {type: String, required: true},
    roadNumber: {type: String, required: false},
    block: {type: String, required: false},
    portal: {type: String, required: false},
    floor: {type: String, required: false},
    door: {type: String, required: false},
    urbanization: {type: String, required: false},
    district: {type: String, required: false},
    state: {type: String, required: true},
    metersBuilt: {type: Number, required: true},
    usefulMeter: {type: Number, required: true},
    properties: {type: String, required: false},
    price: {type: Number, required: true},
    realtor: {type: String, required: true}
});

const RealEstate = model('realestate', realEstateSchema);

module.exports = RealEstate;