const express = require('express');
const RealEstate  = require('../mongo/schemas/realestate');


const getAll = async(req, res) => {
    try {
        const queryStrings = req.query || {};
        const response = await RealEstate.find(queryStrings);
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