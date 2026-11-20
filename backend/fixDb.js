const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

async function fixDatabase() {
  let connection;
  try {
    const config = {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || ''
    };

    console.log(`Connecting to MySQL server at ${config.host}:${config.port} as '${config.user}'...`);
    connection = await mysql.createConnection(config);
    console.log('Successfully connected to MySQL.');

    const databaseName = process.env.DB_NAME || 'aarambh_db';
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\``);
    console.log(`Database '${databaseName}' ensured.`);
    await connection.query(`USE \`${databaseName}\``);

    // 1. Ensure users table exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(100) NOT NULL,
        mobile VARCHAR(15) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        board VARCHAR(50) NOT NULL,
        class VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'student',
        session_token VARCHAR(255) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Users table ensured.');

    // 2. Ensure role column exists
    try {
      await connection.query(`ALTER TABLE users ADD COLUMN role VARCHAR(20) DEFAULT 'student'`);
      console.log('Added missing "role" column to users table.');
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('"role" column already exists.');
      } else {
        console.warn('Warning on role column:', e.message);
      }
    }

    // 3. Ensure session_token column exists
    try {
      await connection.query(`ALTER TABLE users ADD COLUMN session_token VARCHAR(255) DEFAULT NULL`);
      console.log('Added missing "session_token" column to users table.');
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME') {
        console.log('"session_token" column already exists.');
      } else {
        console.warn('Warning on session_token column:', e.message);
      }
    }

    // 4. Ensure otps table exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS otps (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) NOT NULL,
        otp VARCHAR(6) NOT NULL,
        expires_at DATETIME NOT NULL,
        type VARCHAR(20) NOT NULL
      )
    `);

    // 5. Ensure otp_rate_limits table exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS otp_rate_limits (
        email VARCHAR(100) NOT NULL PRIMARY KEY,
        attempts INT NOT NULL DEFAULT 0,
        last_attempt DATETIME NOT NULL,
        block_until DATETIME DEFAULT NULL
      )
    `);

    // 6. Seed / Update Admin account
    const adminHash = await bcrypt.hash('admin123', 10);
    const [adminRows] = await connection.query('SELECT id FROM users WHERE email = ?', ['admin@aarambh.com']);
    if (adminRows.length === 0) {
      await connection.query(
        'INSERT INTO users (full_name, mobile, email, board, class, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
        ['Super Admin', '9999999999', 'admin@aarambh.com', 'Admin', 'Admin', adminHash, 'admin']
      );
      console.log('Admin user created: admin@aarambh.com / admin123');
    } else {
      await connection.query(
        'UPDATE users SET role = "admin", password = ? WHERE email = "admin@aarambh.com"',
        [adminHash]
      );
      console.log('Admin user updated: admin@aarambh.com / admin123');
    }

    // 7. Seed / Update Teacher account
    const teacherHash = await bcrypt.hash('teacher123', 10);
    const [teacherRows] = await connection.query('SELECT id FROM users WHERE email = ?', ['teacher@aarambh.com']);
    if (teacherRows.length === 0) {
      await connection.query(
        'INSERT INTO users (full_name, mobile, email, board, class, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
        ['R.K. Sharma', '8888888888', 'teacher@aarambh.com', 'Faculty', 'Physics', teacherHash, 'teacher']
      );
      console.log('Teacher user created: teacher@aarambh.com / teacher123');
    } else {
      await connection.query(
        'UPDATE users SET role = "teacher", password = ? WHERE email = "teacher@aarambh.com"',
        [teacherHash]
      );
      console.log('Teacher user updated: teacher@aarambh.com / teacher123');
    }

    // 8. Seed / Update Student account
    const studentHash = await bcrypt.hash('student123', 10);
    const [studentRows] = await connection.query('SELECT id FROM users WHERE email = ?', ['rahul@example.com']);
    if (studentRows.length === 0) {
      await connection.query(
        'INSERT INTO users (full_name, mobile, email, board, class, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
        ['Rahul Sharma', '9876543210', 'rahul@example.com', 'CBSE', '12th Science', studentHash, 'student']
      );
      console.log('Student user created: rahul@example.com / student123');
    } else {
      await connection.query(
        'UPDATE users SET role = "student", password = ? WHERE email = "rahul@example.com"',
        [studentHash]
      );
      console.log('Student user updated: rahul@example.com / student123');
    }

    console.log('\n=========================================');
    console.log('Database fix and setup completed successfully!');
    console.log('=========================================');
    console.log('Test Accounts Available:');
    console.log('  Admin:   admin@aarambh.com   / admin123');
    console.log('  Teacher: teacher@aarambh.com / teacher123');
    console.log('  Student: rahul@example.com   / student123');
    console.log('=========================================\n');

    await connection.end();
    process.exit(0);
  } catch (error) {
    console.error('Error fixing database:', error.message);
    if (connection) await connection.end();
    process.exit(1);
  }
}

fixDatabase();
