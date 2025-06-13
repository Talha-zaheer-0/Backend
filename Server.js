// server.js

require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// Routes
app.use('/api/auth', require('./routes/auth')); // Example route (you can add more)

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB Connection Error:', err.message);
  });

