const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { initSocket } = require('./services/socketService');
const authRoutes = require('./Routes/authRoutes');

const app = express();
const server = http.createServer(app);

// app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'POST'] }));
app.use(express.json());

// Initialize Socket.IO
initSocket(server);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

 
app.use(cors({
  origin: 'http://localhost:5173', // must match your frontend
  credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);

server.listen(5000, () => console.log('Server running on port 5000'));