import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</Link>
      <ul className="mt-4">
        {tasks.map(task => (
          <li key={task._id} className="border p-2 my-2 rounded flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p>{task.description}</p>
              <span className={`text-sm ${task.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`}>{task.status}</span>
            </div>
            <div>
              <Link to={`/edit/${task._id}`} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</Link>
              <button onClick={() => deleteTask(task._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;