const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const workoutRoutes = require('./routes/workoutRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for frontend-backend interaction
app.use(bodyParser.json());

// Workout routes
app.use('/api', workoutRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
