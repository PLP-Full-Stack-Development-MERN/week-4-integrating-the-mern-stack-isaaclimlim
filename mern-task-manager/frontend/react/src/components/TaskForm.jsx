import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddTask = () => {
  const [task, setTask] = useState({ title: '', description: '', status: 'pending', dueDate: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks', task);
      navigate('/');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required className="border p-2 w-full mb-2" />
        <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full mb-2"></textarea>
        <select name="status" value={task.status} onChange={handleChange} className="border p-2 w-full mb-2">
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} className="border p-2 w-full mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Task</button>
      </form>
    </div>
  );
};

export default AddTask;