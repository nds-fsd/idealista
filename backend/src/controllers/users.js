const express = require('express');
const User = require("../mongo/schemas/users");

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
    const data = req.body;
    const { email, password, name, location } = data;

    if (!name) {
        return res.status(400).json({ error: { name: "Your name is required" } });
    }

    if (!email) {
        return res.status(400).json({ error: { email: "Email field is required" } });
    }

    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!emailFormat.test(email)) {
        return res.status(400).json({ email: "This is not a valid email address" })
    }

    const user = await User.findOne({ email: email });

    if (user)
        return res.status(400).json({ error: { email: "Email already registered" } });

    const newUser = new User({
        email: email,
        password: password,
        name: name,
        location: location
    })

    try {
        const createdUser = await newUser.save()

        return res.status(201).json({
            message: "User Created Successfully",
            user: {
                email: createdUser.email,
                name: createdUser.name,
                location: createdUser.location,
            }
        })
    } catch {
        return res.status(500).json({ error: "Error creating new user" })
    }
};


module.exports = {
    getAll,
    getById,
    update,
    remove,
    create,
}