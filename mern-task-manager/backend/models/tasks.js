const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    title: 
            {   type: String,
                required: true 
            },
    description: 
            { type: String },
    status: 
            {   type: String, 
                enum: ['pending', 'in progress', 'completed'], 
                default: 'pending' 
            },
    dueDate: { type: Date }
});

const Tasks = mongoose.model('Tasks', TasksSchema);
module.exports = Tasks;