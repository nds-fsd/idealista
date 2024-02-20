const express = require('express');
const User = require("../mongo/schemas/users");
const bcrypt = require('bcrypt');

const jwtoken = require('../security/jwToken')

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await User.findOne({ email })

        if (!userFound) {
            return res.status(400).json({ message: "User not found" });
        }
        const valPassword = bcrypt.compareSync(password, userFound.password);
        if (valPassword) {
            const token = jwtoken.createAccessToken({ id: userFound._id, });
            return res.status(200).json({ user: userFound, token })
        } else {
            return res.status(400).json()
        }

    } catch (error) {
        res.status(500).send(error.message);

    }

};


module.exports = { login };