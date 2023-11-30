const express = require('express');
const RealState  = require('../mongo/schemas/realestate');


const getAll = async(req, res) => {
    try {
        const queryStrings = req.query || {};
        const response = await RealState.find(queryStrings);
        if (response) res.status(200).json(response)
        else res.status(400).send()
    } catch (error) {
        console.log("Error in realstate.js getAll():", error);
        res.status(500).send(error.message);
    }
}

const getId = async(req, res) => {
    try {
        const response = await RealState.findById(req.params.id);
        if (response) res.status(200).json(response) 
        else res.status(404).send()
    } catch (error) {
        console.log("Error in realstate.js getId():", error);
        res.status(500).send(error.message);
    }
}

const create = async(req, res) => {
    try {
        const response = await RealState.create(req.body);
        if (response) res.status(201).json(response) 
        else res.status(400).send()
    } catch (error) {
        console.log("Error in realstate.js create():", error);
        res.status(500).send(error.message);
    }
}

const update = async(req, res) => {
    try {
        const response = await RealState.findByIdAndUpdate(req.params.id, req.body, {new: true, upsert: false});
        if (response) res.status(200).json(response)
        else res.status(404).send()
    } catch (error) {
        console.log("Error in realstate.js update():", error);
        res.status(500).send(error.message);
    }
}

const remove = async(req, res) => {
    try {
        const response = await RealState.findByIdAndDelete(req.params.id);
        if (response) res.status(201).json(response)
        else res.status(404).send()
    } catch (error) {
        console.log("Error in realstate.js remove():", error);
        res.status(500).send();
    }
}

module.exports = { getAll, getId, create, update, remove };