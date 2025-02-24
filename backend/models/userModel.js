const db = require('../config/db');

const createUser = async (user) => {
  const { first_name, last_name, email, password, role } = user;
  try {
    const [result] = await db.execute(
      'INSERT INTO member (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)',
      [first_name, last_name, email, password, role]
    );
    return result;
  } catch (error) {
    console.error('Database insert error:', error);
    throw error; // Re-throw to be caught in controller
  }
};

const findUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM member WHERE email = ?', [email]);
  return rows[0];
};

const createLawyerForm = async (member_id, formData) => {
  const { username, enrollment_id, district_location, experience, cases_taken, cases_won, rating, success_rate } = formData;
  const [result] = await db.execute(
    'INSERT INTO lawyerform (member_id, username, enrollment_id, district_location, experience, cases_taken, cases_won, rating, success_rate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [member_id, username, enrollment_id, district_location, experience, cases_taken, cases_won, rating, success_rate || null] // success_rate is optional
  );
  return result;
};

module.exports = { createUser, findUserByEmail, createLawyerForm };