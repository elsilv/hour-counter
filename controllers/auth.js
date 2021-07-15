const bcrypt = require('bcrypt');
const User = require('../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// POST /api/auth
exports.addAuth = async (req, res, next) => {
    try {
        const { username, passwordHash } = req.body;

        User.findOne({ username })
        .then(user => {
            if(!user) return res.status(400).json({ error: 'User does not exist'});

            bcrypt.compare(passwordHash, user.passwordHash)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            return res.status(201).json({
                                token: token,
                                success: true,
                                data: user
                            });
                        }
                    )
                })
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// GET /api/auth/user
exports.getUsers = async (req, res, next) => {
    try {
        const user = awaitUser.findById(req.user.id);
        user.select('-passwordHash');
    
        return res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'error'
        });
    }

  
}
