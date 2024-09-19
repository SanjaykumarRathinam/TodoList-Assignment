import React, { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import Filter from './Components/Filter';
import TodoList from './Components/TodoList';

function App() {
  // Initialize tasks as an empty array
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (name) => {
    const newTask = { id: Date.now(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

    // Update the task name
    const updateTask = (id, newName) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, name: newName } : task
        )
      );
    };
  

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Incomplete") return !task.completed;
    return false;
  });

  return (
    <div className="App">
      <h1>Your Tasks 👀</h1>
      <TodoForm addTask={addTask} />
      <Filter handleFilterChange={handleFilterChange} />
      <TodoList
        tasks={filteredTasks}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        updateTask={updateTask} // Pass the update function to TodoList
      />
    </div>
  );
}

export default App;
