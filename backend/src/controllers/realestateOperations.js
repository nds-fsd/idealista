const express = require('express');
const RealEstateData = require('../mongo/data/realestates');

const getAllOperationsForBuyers = (req, res) => {
    try {
        res.status(200).json(RealEstateData.realestateOperationsForBuyers);
    } catch (error) {
        console.log("Error in realestateOperations.js getAllOperationsForBuyers():", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = { getAllOperationsForBuyers };