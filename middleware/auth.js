const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
        return next(new ErrorResponse("Authorization denied", 401))
    }

    try {
        const jwt_secret = process.env.JWT_KEY || config.get('jwtSecret')
        const decoded = jwt.verify(token, jwt_secret)
        const user = await User.findById(decoded.id)

        if (!user) return next(new ErrorResponse("No user found", 404))

        req.user = user

        next();

    } catch (error) {
        return next(new ErrorResponse("Not authorized", 401))
    }
}
       