import React from 'react';
import Todo from './Todo';

const TodoList = ({tasks, toggleTaskCompleted, deleteTask, updateTask}) => {
  return (
    <div>
        <ul>
            {tasks.map((task)=>(
                  <Todo
                  key={task.id}
                  task={task}
                  toggleTaskCompleted={toggleTaskCompleted}
                  deleteTask={deleteTask}
                  updateTask={updateTask} // Passing the updateTask function to Todo
                />
            ))}

        </ul>
      
    </div>
  );
}

export default TodoList;
