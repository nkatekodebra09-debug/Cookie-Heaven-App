const Cookie = require('../models/cookie');

const createCookie = async (req, res) => {
    try {
        const { name, description, price, category, stock, image } = req.body;

        const cookieExists = await Cookie.findOne({ name });
        if (cookieExists) {
            return res.status(400).json({
                message: 'Cookie already exists'
            });
        }

        const newCookie = await Cookie.create({
            name,
            description,
            price,
            category,
            stock,
            image
        });

        return res.status(201).json(newCookie);
    } catch (err) {
        console.error('createCookie error:', err);
        return res.status(500).json({
            message: 'Failed to create cookie',
            error: err.message
        });
    }
};

const getCookies = async (req, res) => {
    try {
        const cookies = await Cookie.find();
        if (!cookies || cookies.length === 0) {
            return res.status(404).json({
                message: 'No cookies found'
            });
        }

        return res.json(cookies);
    } catch (err) {
        console.error('getCookies error:', err);
        return res.status(500).json({
            message: 'Failed to fetch cookies',
            error: err.message
        });
    }
};

const deleteCookie = async (req, res) => {
    try {
        const cookie = await Cookie.findById(req.params.id);
        if (!cookie) {
            return res.status(404).json({
                message: 'Cookie not found'
            });
        }

        await Cookie.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            message: 'Cookie deleted successfully'
        });
    } catch (err) {
        console.error('deleteCookie error:', err);
        return res.status(500).json({
            message: 'Failed to delete cookie',
            error: err.message
        });
    }
};

const updateCookie = async (req, res) => {
    try {
        const updated = await Cookie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return res.status(404).json({ message: 'Cookie not found' });
        }

        return res.json(updated);
    } catch (err) {
        console.error('updateCookie error:', err);
        return res.status(500).json({
            message: 'Failed to update cookie',
            error: err.message,
        });
    }
};

module.exports = {
    createCookie,
    getCookies,
    deleteCookie,
    updateCookie,
};