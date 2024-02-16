const express = require('express');
const jwt = require('jsonwebtoken');



const createAccessToken = (payload) => {
    let secretEnv = process.env.JWT_SECRET;
    let expiresIn = process.env.JWT_EXPIRES_IN || '1h';
    return jwt.sign(
        payload,
        secretEnv,
        { expiresIn },
    );
    
};

module.exports = createAccessToken;

