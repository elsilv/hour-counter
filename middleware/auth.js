/* const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).json({ error: 'Authorization denied' });

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: 'error'
        });
    } 
}

module.exports = auth; */