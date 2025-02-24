const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail, createLawyerForm,  } = require('../models/userModel');
require('dotenv').config();

const register = async (req, res) => {
  try {
    const { first_name, last_name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser({ first_name, last_name, email, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error); // More detailed logging
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { userId: user.id, first_name: user.first_name, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.json({ token, first_name: user.first_name });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

// Middleware to verify JWT and extract user info
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Expecting "Bearer <token>"
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user; // Attach user info to request
    next();
  });
};

const submitLawyerForm = async (req, res) => {
  try {
    const { username, enrollment_id, district_location, experience, cases_taken, cases_won, rating, success_rate } = req.body;
    
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized: No user information found' });
    }

    if (req.user.role !== 'lawyer') {
      return res.status(403).json({ error: 'Only lawyers can submit this form' });
    }

    const member_id = req.user.userId; // Ensure this exists
    console.log('Submitting form for user:', req.user);

    await createLawyerForm(member_id, {
      username,
      enrollment_id,
      district_location,
      experience,
      cases_taken,
      cases_won,
      rating,
      success_rate,
    });

    res.status(201).json({ message: 'Lawyer form submitted successfully' });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ error: 'Form submission failed' });
  }
};


const getLawyerStatsController = async (req, res) => {
  try {
    console.log('Fetching lawyer stats for user:', req.user);
    if (!req.user || req.user.role !== 'lawyer') {
      return res.status(403).json({ error: 'Unauthorized: Only lawyers can access this data' });
    }

    const member_id = req.user.userId;
    const stats = await getLawyerStats(member_id);

    if (!stats) {
      return res.status(404).json({ error: 'No lawyer form data found' });
    }

    res.json({
      cases_taken: stats.cases_taken,
      cases_won: stats.cases_won,
    });
  } catch (error) {
    console.error('Error fetching lawyer stats:', error);
    res.status(500).json({ error: 'Failed to fetch lawyer stats' });
  }
};


module.exports = { register, login, submitLawyerForm, authenticateToken, getLawyerStatsController };