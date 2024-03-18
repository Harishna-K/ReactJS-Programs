// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define mongoose schema and model if needed

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/signup', (req, res) => {
  // Handle form submission and database interaction here
  console.log(req.body); // Form data sent from React application
  // Save data to MongoDB or perform any other operations
  res.status(200).json({ message: 'Form submitted successfully' });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
