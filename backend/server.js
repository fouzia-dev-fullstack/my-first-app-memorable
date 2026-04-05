const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log('MongoDB error:', err));

// Routes
app.use('/api/auth', authRoutes);

const verifyToken = require('./middleware/auth');

// Protected route
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}! You are logged in.` });
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});