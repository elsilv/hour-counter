const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.register = async (req, res, next) => {
    const { username, email, name, password } = req.body;

    try {
        const user = await User.create({
            username, email, name, password
        })

        sendToken(user, 201, res);
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

        sendToken(user, 200, res);

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

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({
        success: true, 
        token
    })
} 