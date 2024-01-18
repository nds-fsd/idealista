const express = require('express');
const RealEstateData = require('../mongo/data/realestates');

const getAll = (req, res) => {
    try {
        res.status(200).json(RealEstateData.realestateTypes);
    } catch (error) {
        console.log("Error in realestate.js getTypes():", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = { getAll };