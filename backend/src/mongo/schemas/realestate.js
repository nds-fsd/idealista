const { model, Schema } = require('mongoose');

const realestateSchema = new Schema({
    realtytype: {type: String, required: true},
    realtysubtype: {type: String, required: true},
    operation: {type: String, required: true},
    shortdescription: {type: String, required: true},
    location: {type: String, required: true},
    roadname: {type: String, required: true},
    roadnumber: {type: String, required: false},
    block: {type: String, required: false},
    portal: {type: String, required: false},
    floor: {type: String, required: false},
    door: {type: String, required: false},
    urbanization: {type: String, required: false},
    district: {type: String, required: false},
    state: {type: String, required: true},
    metersbuilt: {type: Number, required: true},
    usefulmeter: {type: Number, required: true},
    properties: {type: String, required: false},
    price: {type: Number, required: true},
    realstate: {type: String, required: true},
})

const RealEstate = model('realestate', realestateSchema);

module.exports = RealState;