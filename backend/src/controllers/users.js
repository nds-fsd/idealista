const express = require('express');
const User = require("../mongo/schemas/users");
const Favorite = require('../mongo/schemas/favorite');


const getAll = async (req, res) => {
    try {
        const queryStrings = req.query || {};
        const allUsers = await User.find(queryStrings);
        if (allUsers) {
            res.status(200).json(allUsers);
        } else {
            res.status(404).send()
        }
    } catch (error) {
        console.log("Error in users.js getAll():", error.message)
        res.status(500).send(error.message)
    }
};

const getFavorite = async (req, res) => {
    try {
        const userId = req.params.id;
        const favorite = await Favorite.find({ user: userId })
            .populate("realEstate")
            .select("-_id")
            .select("-user")
            .select("-__v");
        res.status(200).json(favorite);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send()
        }
    } catch (error) {
        console.log("Error in users.js getById():", error.message)
        res.status(500).send(error.message)
    }
};

const update = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            upsert: false,
        });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        console.log("Error in users.js update():", error.message)
        res.status(500).send(error.message)
    }
};

const remove = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id, req.body);
        if (user) {
            res.status(201).json(user);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        console.log("Error in users.js remove():", error.message)
        res.status(500).send(error.message)
    }
};

const create = async (req, res) => {
    try {
        const data = req.body;
        const { email, password, name, location } = data;

        const newUser = new User({
            email: email,
            password: password,
            name: name,
            location: location
        })

        const createdUser = await newUser.save()
        if (createdUser) {
            return res.status(201).json({
                message: "Tu usuario ha sido creado con éxito 🚀",
                user: createdUser
            })
        } else {
            res.status(400).send();
        }
    } catch {
        return res.status(500).json({ error: "Ha habido un error creando tu usuario" })
    }
}

module.exports = {
    getAll,
    getById,
    update,
    remove,
    create,
    getFavorite
}