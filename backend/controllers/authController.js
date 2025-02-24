// backend/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail, createLawyerForm } = require('../models/userModel');
require('dotenv').config();

const register = async (req, res) => {
  try {
    const { first_name, last_name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser({ first_name, last_name, email, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user.id, first_name: user.first_name, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, first_name: user.first_name });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

const submitLawyerForm = async (req, res) => {
  try {
    const formData = req.body;
    await createLawyerForm(formData);
    res.status(201).json({ message: 'Lawyer form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Form submission failed' });
  }
};

module.exports = { register, login, submitLawyerForm };
