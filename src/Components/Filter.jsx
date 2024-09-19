import React from 'react';

const Filter = ({handleFilterChange}) => {
  return (
    <div className='filter-buttons'>
        <button onClick={()=>handleFilterChange("All")}>All</button>
        <button onClick={()=>handleFilterChange("Completed")}>Completed</button>
        <button onClick={()=>handleFilterChange("Incomplete")}>Incomplete</button>
      
    </div>
  );
}

export default Filter;
