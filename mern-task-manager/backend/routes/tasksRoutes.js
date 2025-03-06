const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks.js');
const { newTask, getAllTasks, updateTask, deleteTask } = require('../controllers/tasksController.js')

// Create a new Task route
router.post('/', newTask);

// Get all Tasks route
router.get('/', getAllTasks);

// Update a Task route
router.put('/:id', updateTask);

// Delete a Task route
router.delete('/:id', deleteTask);

module.exports = router;