const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const bcrypt = require('bcryptjs');
const { createUser } = require('./models/userModel');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Middleware to log errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Example route with error handling
app.post('/register', async (req, res, next) => {
  try {
    const { first_name, last_name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser({ first_name, last_name, email, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
