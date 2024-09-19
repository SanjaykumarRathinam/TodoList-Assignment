import React, { useState } from 'react';
import './Todo.css'; 

const Todo = ({ task, toggleTaskCompleted, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleEditChange = (e) => {
    setNewName(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTask(task.id, newName); // Save the edited task name
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={newName}
            onChange={handleEditChange}
            className="edit-task-input"
          />
          <button type="submit" className="save-button">Save</button>
        </form>
      ) : (
        <li>
          <label className="todo-label">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompleted(task.id)}
              className="todo-checkbox"
            />
            {task.completed ? (
              <s className="completed-task">{task.name}</s>
            ) : (
              <span className="task-name">{task.name}</span>
            )}

          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
          </label>
         
        </li>
      )}
    </div>
  );
};

export default Todo;
