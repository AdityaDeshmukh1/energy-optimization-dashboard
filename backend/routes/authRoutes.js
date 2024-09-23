const express = require('express');
const { register, login } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware'); // Import the protect middleware
const router = express.Router();

// Register a new user
router.post('/register', register);

// Login user
router.post('/login', login);

// Example of a protected route
router.get('/protected', protect, (req, res) => {
  res.json({ message: 'You have access to this protected route', user: req.user });
});

module.exports = router;
