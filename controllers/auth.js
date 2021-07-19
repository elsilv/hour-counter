const User = require('../models/User');

exports.register = async (req, res, next) => {
    const { username, email, name, password } = req.body;

    try {
        const user = await User.create({
            username, email, name, password
        })

        res.status(201).json({
            success: true,
            user: user
        });
    } catch (error) {
        res.status(500).json({
            success: false
        });
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).json({
            success: false,
            error: "email or password is missing"
        })
    }

    try {
        const user = await User.findOne({ email }).select("+password")

        if(!user) { 
            res.status(400).json({ 
                success: false, 
                error: "User not found" }) 
            }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch) { 
            res.status(400).json({ 
                success: false, 
                error: "Wrong password" }) 
            }

        res.status(200).json({
            success: true,
            token: "lsll33l"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Something gone wrong with login"
        });
    }
}

exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route");
}

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route");
}