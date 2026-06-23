const express = require('express');
const router = express.Router();

const { getCookies, createCookie, updateCookie, deleteCookie } = require('../controllers/cookieController');
const protect = require('../middleware/authMiddleware'); 
router.get('/', getCookies);

router.post('/', protect, createCookie);

router.put('/:id', protect, updateCookie);

router.delete('/:id', protect, deleteCookie);

module.exports = router;



