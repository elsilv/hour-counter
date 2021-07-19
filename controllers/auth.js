const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

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
        next(error);
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) { 
        return next(new ErrorResponse("Email or Password is missing", 400)) 
    }

    try {
        const user = await User.findOne({ email }).select("+password")

        if (!user) { 
            return next(new ErrorResponse("Invalid User", 401)) 
        }

        const isMatch = await user.matchPasswords(password);

        if (!isMatch) { 
            return next(new ErrorResponse("Email or Password is wrong", 401))  
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