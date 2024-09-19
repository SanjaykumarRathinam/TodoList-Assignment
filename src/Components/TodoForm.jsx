import React, { useState } from 'react';


const TodoForm = ({addTask}) => {
const [taskName, setTaskName]=useState("");

const handleSubmit=(e)=>{
    e.preventDefault();
    if(taskName.trim()){
        addTask(taskName);
        setTaskName("");
    }
}

  return (
    <div className='TodoForm'>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your task' value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
        <button type='submit'>Add Task</button>
    </form>
        
      
    </div>
  );
}

export default TodoForm;
