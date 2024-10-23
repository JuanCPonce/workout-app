const Workout = require('../models/workout');

// Create a new workout
exports.createWorkout = async (req, res) => {
    try {
        const workout = new Workout(req.body);
        await workout.save();
        res.status(201).json(workout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all workouts
exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single workout by ID
exports.getWorkoutById = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) return res.status(404).json({ message: 'Workout not found' });
        res.status(200).json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a workout by ID
exports.updateWorkout = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workout) return res.status(404).json({ message: 'Workout not found' });
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a workout by ID
exports.deleteWorkout = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        if (!workout) return res.status(404).json({ message: 'Workout not found' });
        res.status(200).json({ message: 'Workout deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
