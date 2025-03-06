import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: '', description: '', status: 'pending', dueDate: '' });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, task);
      navigate('/');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required className="border p-2 w-full mb-2" />
        <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full mb-2"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
