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
        return res.status(400).json({ error: { name: "Tu nombre es requerido" } });
    }

    const validName = /^.{3,}$/

    if (!validName.test(name)) {
        return res.status(400).json({ name: "El nombre debe tener al menos 3 caracteres" })
    }

    if (!email) {
        return res.status(400).json({ error: { email: "Tu email es requerido" } });
    }

    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!emailFormat.test(email)) {
        return res.status(400).json({ email: "Este no es un email válido" })
    }

    if (!password) {
        return res.status(400).json({ error: { password: "Es requerida una contraseña" } });
    }
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if (!validatePassword.test(password)) {
        return res.status(400).json({ password: 'La contraseña debe tener al menos: 8 caracteres, una letra mayúscula, una letra minúscula y un número' })
    }


    const user = await User.findOne({ email: email });

    if (user)
        return res.status(400).json({ error: { email: "Este email ya está registrado" } });

    const newUser = new User({
        email: email,
        password: password,
        name: name,
        location: location
    })

    try {
        const createdUser = await newUser.save()

        return res.status(201).json({
            message: "Tu usuario ha sido creado con éxito 🚀",
            user: {
                email: createdUser.email,
                name: createdUser.name,
                location: createdUser.location,
            }
        })
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
}