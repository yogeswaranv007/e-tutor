const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/check-username', async (req, res) => {
  const { username, table } = req.query;
  const validTables = ['students', 'tutors'];

  if (!validTables.includes(table)) {
    return res.status(400).json({ error: 'Invalid table' });
  }

  try {
    const query = `SELECT * FROM ${table} WHERE username = $1`;
    const result = await pool.query(query, [username]);

    if (result.rows.length > 0) {
      return res.json({ available: false });
    } else {
      return res.json({ available: true });
    }
  } catch (error) {
    console.error('Error checking username availability:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/register-student', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingStudent = await pool.query(
      'SELECT * FROM students WHERE username = $1 OR email = $2',
      [username, email]
    );

    if (existingStudent.rows.length > 0) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the hashed password into the database
    const newStudent = await pool.query(
      'INSERT INTO students (email, username, password) VALUES ($1, $2, $3) RETURNING *',
      [email, username, hashedPassword]
    );

    res.status(201).json(newStudent.rows[0]);
  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.post('/register-tutor', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingTutor = await pool.query(
      'SELECT * FROM tutors WHERE username = $1 OR email = $2',
      [username, email]
    );

    if (existingTutor.rows.length > 0) {
      return res.status(400).json({ error: 'Tutor already exists' });
    }

    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the hashed password into the database
    const newTutor = await pool.query(
      'INSERT INTO tutors (email, username, password) VALUES ($1, $2, $3) RETURNING *',
      [email, username, hashedPassword]
    );

    res.status(201).json(newTutor.rows[0]);
  } catch (error) {
    console.error('Error registering tutor:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Backend server is up and running');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
