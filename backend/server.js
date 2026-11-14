const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Configure this later for specific domains to improve security
app.use(express.json());
app.use('/uploads', express.static(require('path').join(__dirname, 'uploads')));

const contactRoutes = require('./routes/contactRoutes');
const apiRoutes = require('./routes/apiRoutes');
const blogRoutes = require('./routes/blogRoutes');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

// Test DB pool connection on startup
const db = require('./config/db');
db.getConnection()
  .then((conn) => {
    console.log('Database connected successfully.');
    conn.release();
  })
  .catch((err) => {
    console.warn(`Database connection warning (${err.code || 'ERR'}): ${err.message}`);
    console.warn('Verify database credentials in backend/.env');
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
