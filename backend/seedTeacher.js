const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

async function seedTeacher() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'aarambh_db'
    });

    // Ensure role and session_token exist
    try {
      await connection.query(`ALTER TABLE users ADD COLUMN role VARCHAR(20) DEFAULT 'student'`);
    } catch (e) {
      if (e.code !== 'ER_DUP_FIELDNAME') console.warn('Role column warning:', e.message);
    }
    try {
      await connection.query(`ALTER TABLE users ADD COLUMN session_token VARCHAR(255) DEFAULT NULL`);
    } catch (e) {
      if (e.code !== 'ER_DUP_FIELDNAME') console.warn('Session_token column warning:', e.message);
    }

    const hashedPassword = await bcrypt.hash('teacher123', 10);
    const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', ['teacher@aarambh.com']);
    if (rows.length === 0) {
      await connection.query(
        'INSERT INTO users (full_name, mobile, email, board, class, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
        ['R.K. Sharma', '8888888888', 'teacher@aarambh.com', 'Faculty', 'Physics', hashedPassword, 'teacher']
      );
      console.log('Teacher user created (teacher@aarambh.com / teacher123).');
    } else {
      await connection.query('UPDATE users SET role = "teacher", password = ? WHERE email = ?', [hashedPassword, 'teacher@aarambh.com']);
      console.log('Teacher user updated (teacher@aarambh.com / teacher123).');
    }

    await connection.end();
    console.log('Teacher seeding completed.');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding teacher:', err);
    process.exit(1);
  }
}

seedTeacher();
