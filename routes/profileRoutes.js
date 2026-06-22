const express = require('express');
const router = express.Router();
const { profile, profileById, updateProfile, deleteProfile } = require('../controllers/pageController');
const protect = require('../middleware/authMiddleware');

const User = require('../models/user');

router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});


router.get('/profile', protect, profile);
router.get('/profile/:userId', profileById);
router.patch('/profile/:userId', updateProfile);
router.delete('/profile/:userId', deleteProfile);

module.exports = router;
