const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true }
});

const WorkoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    exercises: [ExerciseSchema]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
