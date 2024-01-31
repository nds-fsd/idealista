const express = require('express');
const RealEstate  = require('../mongo/schemas/realestate');


const formatQuery = (queryParams) => {
    if (queryParams === "") return "";

    let query = {};
    if (queryParams.hasOwnProperty("operation")) query.operation = queryParams.operation;
    if (queryParams.hasOwnProperty("location")) query.location = queryParams.location;
    if (queryParams.hasOwnProperty("realEstateType")) query.realEstateType = queryParams.realEstateType;

    if (queryParams.hasOwnProperty("price")) {
        const priceValues = queryParams.price.split(",");
        const priceMin = priceValues[0];
        const priceMax = priceValues[1];
        query.price = {"$gte": priceMin, "$lte": priceMax}
    }

    if (queryParams.hasOwnProperty("state")) {
        const stateValues = queryParams.state.split(",");
        const state = [];
        for(i=0; i<=stateValues.length-1; i++){
            state.push({"state": stateValues[i]});
        }
        query.$or = state
    }

    if (queryParams.hasOwnProperty("rooms")) query.rooms = {"$gte": Number(queryParams.rooms)}
    if (queryParams.hasOwnProperty("bathrooms")) query.bathrooms = {"$gte": Number(queryParams.bathrooms)}

    return query;
}

const getAll = async(req, res) => {
    try {
        const queryStrings = req.query || {};
        const response = await RealEstate.find(formatQuery(queryStrings));
        if (response) res.status(200).json(response)
        else res.status(400).send()
    } catch (error) {
        console.log("Error in realestate.js getAll():", error.message);
        res.status(500).send(error.message);
    }
}

const getId = async(req, res) => {
    try {
        const response = await RealEstate.findById(req.params.id);
        if (response) res.status(200).json(response) 
        else res.status(404).send()
    } catch (error) {
        console.log("Error in realestate.js getId():", error.message);
        res.status(500).send(error.message);
    }
}

const create = async(req, res) => {
    try {
        const response = await RealEstate.create(req.body);
        if (response) res.status(201).json(response) 
        else res.status(400).send()
    } catch (error) {
        console.log("Error in realestate.js create():", error.message);
        res.status(500).send(error.message);
    }
}

const update = async(req, res) => {
    try {
        const response = await RealEstate.findByIdAndUpdate(req.params.id, req.body, {new: true, upsert: false});
        if (response) res.status(200).json(response)
        else res.status(404).send()
    } catch (error) {
        console.log("Error in realestate.js update():", error.message);
        res.status(500).send(error.message);
    }
}

const remove = async(req, res) => {
    try {
        const response = await RealEstate.findByIdAndDelete(req.params.id);
        if (response) res.status(201).json(response)
        else res.status(404).send()
    } catch (error) {
        console.log("Error in realestate.js remove():", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = { getAll, getId, create, update, remove };