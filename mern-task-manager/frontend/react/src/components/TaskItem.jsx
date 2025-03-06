import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TaskItem = ({ task, deleteTask }) => {
    const navigate = useNavigate();
  
    return (
      <div className="p-4 border rounded shadow mb-2">
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={() => navigate(`/edit/${task._id}`)} className="bg-blue-500 text-white p-2 mt-2 rounded">
          Edit
        </button>
        <button onClick={() => deleteTask(task._id)} className="bg-red-500 text-white p-2 mt-2 ml-2 rounded">
          Delete
        </button>
      </div>
    );
  };

  
export default TaskItem;