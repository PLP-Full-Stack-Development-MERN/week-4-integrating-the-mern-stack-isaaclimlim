// 1. Import the necessary modules:
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const taskRoute = require("./routes/tasksRoutes.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Define the routes
app.use("/api/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send("Task Manager API Running...");
});

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URI;

// 2. Connect to MongoDB

mongoose
 .connect(MONGODB_URL)
 .then( () => { console.log("Connected to MongoDB"); })
    .catch( (err) => { console.log("Error connecting to MongoDB") })
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
