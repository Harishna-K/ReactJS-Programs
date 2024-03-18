// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth');

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 8005;
// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect('mongodb://localhost:27017/Register', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
//   .catch(error => console.error(error));


// server.js

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// // Define User schema
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   // other fields...

// });

// const User = mongoose.model('User', userSchema);

// // Routes
// app.post('http://localhost:7000/api/regis', async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).send(newUser);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email, password });
//     if (!user) {
//       res.status(404).send('User not found');
//     } else {
//       res.status(200).send('Login successful');
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 7000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Backend server code (e.g., in app.js or server.js)
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String
});
const User = mongoose.model('User', userSchema);

app.post('/api/regis', async (req, res) => {
  try {

    const { name, email, password, phoneNumber } = req.body;

    const newUser = new User({ name, email, password, phoneNumber });

    const doc=await newUser.save();
    console.log(doc);
    res.send("Finished")
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
const PORT = process.env.PORT || 7005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
