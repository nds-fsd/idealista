const express = require('express');
const jwt = require('jsonwebtoken');



const createAccessToken = (payload) => {
    let secretEnv = process.env.JWT_SECRET;
    let expiresIn = process.env.JWT_EXPIRES_IN || '1h';
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            secretEnv,
            { expiresIn },
            (error, token) => {
                if (error) {
                    reject(console.log("Error in jwToken.js: " + error.message));
                } else {
                    resolve(token);
                }
            }
        );
    });
};

module.exports = createAccessToken;

