const express = require("express");
const Workout = require("../models/workoutModel");

//Router
const router = express.Router();

// Routes
// Get All Workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});
// Get a single Workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});
// Post a new Workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Delete a Workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});
// Update a Workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

// Export the Router
module.exports = router;
