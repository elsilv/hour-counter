const bcrypt = require('bcrypt');
const User = require('../models/User');

// GET /api/user
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
    
        return res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'error'
        });
    }
}

// POST /api/user
exports.addUser = async (req, res, next) => {
    try {
        const { username, name, passwordHash } = req.body;

        const saltRounds = 10;
        req.body.passwordHash = await bcrypt.hash(req.body.passwordHash, saltRounds);
   
        const user = await User.create(req.body);
        return res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// DELETE /api/user/:id
exports.deleteUser = async (req, res, next) => { 
    try {
        const user = await User.findById(req.params.id);

        if(user) {
            await user.remove();
            return res.status(200).json({
                success: true
            })
        }

        else { 
            res.status(404).json({
            success: false,
            error: 'No user found'
            });
        }
        

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}
