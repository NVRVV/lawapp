// backend/models/userModel.js
const db = require('../config/db');

const createUser = async (user) => {
  const { first_name, last_name, email, password, role } = user;
  const [result] = await db.execute(
    'INSERT INTO members (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)',
    [first_name, last_name, email, password, role]
  );
  return result;
};

const findUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM members WHERE email = ?', [email]);
  return rows[0];
};

module.exports = { createUser, findUserByEmail };
