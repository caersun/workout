const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [
        {
            type: { type: String, required: "You must enter an exercise type" }, // add { trim: true } ?
            name: { type: String, required: "You must enter an exercise name"},
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;