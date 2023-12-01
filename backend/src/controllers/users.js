const express = require('express');
const User = require("../mongo/schemas/users");

const getAll = async (req, res) => {

    try {
        const queryStrings = req.query || {};
        const allUsers = await User.find(queryStrings);
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error)
    }

};

const getById = async (req, res) => {
    try {
        const allUsers = await User.findById(req.params.id);
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error)
    }

};

const update = async (req, res) => {

    try {
        const allUsers = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            upsert: true,
        }); res.status(200).json(allUsers);
    } catch (error) {
        console.log(error)
    }


};

const remove = async (req, res) => {
    try {
        const allUsers = await User.findByIdAndDelete(req.params.id, req.body);
        res.json(allUsers);
    } catch (error) {
        console.log(error)
    }

};

const create = async (req, res) => {
    try {
        const response = await User.create(req.body);
        if (response) res.status(201).json(response)
        else res.status(400).send()
    } catch (error) {
        console.log("Error in users.js create():", error);
        res.status(500).send(error.message);
    }


}

module.exports = {
    getAll,
    getById,
    update,
    remove,
    create,
}