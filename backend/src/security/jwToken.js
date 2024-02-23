const express = require('express');
const jwt = require('jsonwebtoken');


let secretEnv = process.env.JWT_SECRET;
let expiresIn = process.env.JWT_EXPIRES_IN || '1h';

const createAccessToken = (payload) => {
    console.log(secretEnv)
    return jwt.sign(
        payload,
        secretEnv,
        { expiresIn },
    );

};

const verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, secretEnv);
    } catch {
        return null;
    }
}

module.exports = { createAccessToken, verifyAccessToken };

