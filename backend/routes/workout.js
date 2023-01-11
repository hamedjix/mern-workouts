const express = require("express");
const Workout = require("../models/workoutModel");
const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

//Router
const router = express.Router();

// Routes
// Get All Workouts
router.get("/", getAllWorkouts);
// Get a single Workout
router.get("/:id", getWorkout);
// Post a new Workout
router.post("/", createWorkout);
// Delete a Workout
router.delete("/:id", deleteWorkout);
// Update a Workout
router.patch("/:id", updateWorkout);

// Export the Router
module.exports = router;
