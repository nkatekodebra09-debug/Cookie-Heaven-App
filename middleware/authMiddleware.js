const jwt = require('jsonwebtoken');
const User = require('../models/user');

const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select('-password');
        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        req.user = user;
        next();
    } catch (err) {
        console.error('authMiddleware error:', err);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = protect;