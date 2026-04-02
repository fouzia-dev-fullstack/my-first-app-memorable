const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.post('/test', (req, res) => {
  res.json({ message: 'test works' });
});
// Routes
app.use('/api/auth', authRoutes);
app.use((req, res, next) => {
  console.log('Request:', req.method, req.url);
  next();
});
app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});