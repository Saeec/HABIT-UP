import React, { useState } from 'react';
import '../../DB.css';

const TodoList = () => {
  const [tasks, setTasks] = useState(Array(7).fill(''));
  const [input, setInput] = useState('');

  const handleChange = (i, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[i] = value;
    setTasks(updatedTasks);
  };

  const handleClear = () => {
    setTasks(Array(7).fill(''));
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {tasks.map((task, i) => (
          <li key={i}>
            <input
              type="text"
              placeholder={`Task ${i + 1}`}
              value={task}
              onChange={(e) => handleChange(i, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <div className="clear-btn" onClick={handleClear}>clear</div>
    </div>
  );
};

export default TodoList;
