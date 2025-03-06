import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = ({ addTask, updateTask, tasks }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({ title: '', description: '', status: 'pending', dueDate: '' });

  

  useEffect(() => {
    if (id) {
      const existingTask = tasks.find((t) => t._id === id);
      if (existingTask) setTask(existingTask);
    }
  }, [id, tasks]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTask(id, task);
    } else {
      addTask(task);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        className="p-2 border rounded w-full mb-2"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        className="p-2 border rounded w-full mb-2"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        {id ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
