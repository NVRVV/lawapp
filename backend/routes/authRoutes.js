// backend/routes.js
const express = require('express');
const { register, login, submitLawyerForm, authenticateToken, getLawyerStatsController } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/submit-lawyer-form', authenticateToken, submitLawyerForm);
router.get('/lawyer-stats', authenticateToken, getLawyerStatsController);


module.exports = router;