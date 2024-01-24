const express = require('express');
const Favorite = require("../mongo/schemas/favorite");
const User = require('../mongo/schemas/users');

const getAll = async (req, res) => {
    try {
        const queryStrings = req.query || {};
        const allFavorites = await Favorite.find(queryStrings);
        if (allFavorites) {
            res.status(200).json(allFavorites);
        } else {
            res.status(404).send()
        }
    } catch (error) {
        console.log("Error in favorite.js getAll():", error.message)
        res.status(500).send(error.message)
    }
};

const getById = async (req, res) => {
    try {
        const favorite = await Favorite.findById(req.params.id);
        if (favorite) {
            res.status(200).json(favorite);
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
        const favorite = await Favorite.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            upsert: false,
        });
        if (favorite) {
            res.status(200).json(favorite);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        console.log("Error in favorite.js update():", error.message)
        res.status(500).send(error.message)
    }
};

const remove = async (req, res) => {
    try {
        const favorite = await Favorite.findByIdAndDelete(req.params.id, req.body);
        if (favorite) {
            res.status(201).json(favorite);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        console.log("Error in favorite.js remove():", error.message)
        res.status(500).send(error.message)
    }
};

const create = async (req, res) => {

    try {
        const data = req.body;
        const { userId, realestateId } = data;

        const newFavorite = new Favorite({
            userId,
            realestateId
        })

        const createdFavorite = await newFavorite.save()
        if (createdFavorite) {
            return res.status(201).json({
                message: "Este inmueble se ha añadido a tus favoritos 🚀",
                user: createdFavorite
            })
        } else {
            res.status(400).send();
        }
    } catch {
        return res.status(500).json({ error: "Ha habido un error añadiendo favorito" })
    }
}



module.exports = {
    getAll,
    getById,
    update,
    remove,
    create,
}