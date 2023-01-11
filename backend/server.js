require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

// Make Express App
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listening for Requests
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`connected to DB and listen to port ${PORT} for requests`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
