const express = require('express');
const router = express.Router();
const { registerUser, login, me } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');


router.post('/register', registerUser);

router.post('/login', login);

router.get('/me', protect, me);

module.exports = router;
