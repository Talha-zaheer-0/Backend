const express = require('express');
const router = express.Router();
const { signup, verifyEmail, login } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.get('/verify', verifyEmail);
router.post('/login', login);
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});

module.exports = router;