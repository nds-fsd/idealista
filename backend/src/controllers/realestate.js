const express = require('express');
const realestateData = require('../mongo/schemas/realestate');


const getAll = async(req, res) => {
    try {
        const queryStrings = req.query || {};
        const response = await realestateData.find(queryStrings);
        if (response) res.status(200).json(response)
        else response.status(400).send()
    } catch (error) {
        console.log("Error in realstate.js getAll():", error);
        res.status(500).send();
    }
}

const getId = async(req, res) => {
    try {
        const response = await realestateData.findById(req.params.id);
        if (response) res.status(200).json(response)
        else response.status(400).send()
    } catch (error) {
        console.log("Error in realstate.js getId():", error);
        res.status(500).send();
    }
}

const create = async(req, res) => {
    try {
        const response = await realestateData.create(req.params.id, req.body);
        if (response) res.status(201).json(response)
        else res.status(404).send()
    } catch (error) {
        console.log("Error in realstate.js create():", error);
        res.status(500).send();
    }
}

const update = async(req, res) => {
    try {
        const response = await realestateData.findByIdAndUpdate(req.params.id, req.body, {new: true, upsert: true});
        if (response) res.status(201).json(response)
        else res.status(404).send()
    } catch (error) {
        console.log("Error in realstate.js update():", error);
        res.status(500).send();
    }
}

const remove = async(req, res) => {
    try {
        const response = await realestateData.findByIdAndDelete(req.params.id);
        if (response) res.status(201).json(response)
        else res.status(400).send()
    } catch (error) {
        console.log("Error in realstate.js getAll():", error);
        res.status(500).send();
    }
}