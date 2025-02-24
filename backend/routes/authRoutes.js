const express = require('express');
const { register,login, submitLawyerForm } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/submit-lawyer-form', submitLawyerForm);


module.exports = router;
