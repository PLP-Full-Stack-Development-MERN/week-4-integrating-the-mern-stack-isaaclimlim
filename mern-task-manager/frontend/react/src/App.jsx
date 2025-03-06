import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [notification, setNotification] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addTask = async (task) => {
    try {
      await axios.post('http://localhost:5000/api/tasks', task);
      fetchTasks();
      showNotification('Task added successfully!', 'success');
    } catch (error) {
      console.error('Error adding task:', error);
      showNotification('Failed to add task.', 'error');
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
      fetchTasks();
      showNotification('Task updated successfully!', 'success');
    } catch (error) {
      console.error('Error updating task:', error);
      showNotification('Failed to update task.', 'error');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
      showNotification('Task deleted successfully!', 'success');
    } catch (error) {
      console.error('Error deleting task:', error);
      showNotification('Failed to delete task.', 'error');
    }
  };
  return (
    <Router>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      {notification && (
          <div className={`p-2 mb-4 text-white ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            {notification.message}
          </div>
        )}
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} deleteTask={deleteTask} />} />
          <Route path="/add" element={<TaskForm addTask={addTask} />} />
          <Route path="/edit/:id" element={<TaskForm updateTask={updateTask} tasks={tasks} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App