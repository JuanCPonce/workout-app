const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// Create workout
router.post('/workouts', workoutController.createWorkout);

// Get all workouts
router.get('/workouts', workoutController.getWorkouts);

// Get workout by ID
router.get('/workouts/:id', workoutController.getWorkoutById);

// Update workout
router.put('/workouts/:id', workoutController.updateWorkout);

// Delete workout
router.delete('/workouts/:id', workoutController.deleteWorkout);

module.exports = router;
