// Simple page controllers for Home, About, Contact and Profile
const User = require('../models/user');

const home = (req, res) => {
    res.json({
        title: 'Cookie Heaven',
        message: 'Welcome to Cookie Heaven API',
    });
};

const about = (req, res) => {
    res.json({
        title: 'About Cookie Heaven',
        description: 'Cookie Heaven is an API for managing delicious cookies and user accounts.',
    });
};

const contact = (req, res) => {
    res.json({
        title: 'Contact',
        email: 'support@cookieheaven.example',
        phone: '+1-555-0123',
    });
};

const profile = (req, res) => {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

    res.json({
        title: 'Profile',
        user: {
            id: req.user._id,
            username: req.user.username,
            email: req.user.email,
        },
    });
};

const profileById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({
            title: 'Profile',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (err) {
        console.error('profileById error:', err);
        res.status(400).json({ message: 'Invalid userId' });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const updates = req.body;

        const user = await User.findByIdAndUpdate(
            userId,
            { $set: updates },
            { new: true, runValidators: true }
        ).select('-password');

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ message: 'Profile updated', user });
    } catch (err) {
        console.error('updateProfile error:', err);
        res.status(400).json({ message: 'Invalid userId or update data' });
    }
};

const deleteProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await user.findByIdAndDelete(UserId)

         if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
        res.status(400).json({ message: 'Invalid userId' });
  

    }
}

module.exports = {
    home,
    about,
    contact,
    profile,
    profileById,
    updateProfile,
    deleteProfile
};
