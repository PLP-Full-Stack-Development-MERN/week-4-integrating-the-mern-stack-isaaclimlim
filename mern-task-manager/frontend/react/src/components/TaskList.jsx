import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
//import { useNavigate } from 'react-router-dom';

function TaskList({ tasks, deleteTask }) {
    const navigate = useNavigate();
  
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">Tasks</h2>
        <ul>
          {tasks.map(task => (
            <TaskItem key={task._id} task={task} deleteTask={deleteTask} navigate={navigate} />
          ))}
        </ul>
      </div>
    );
  }

  export default TaskList;