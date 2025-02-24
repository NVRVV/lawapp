const express = require('express');
const { register, login, submitLawyerForm, authenticateToken } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/submit-lawyer-form', authenticateToken, submitLawyerForm);

module.exports = router;