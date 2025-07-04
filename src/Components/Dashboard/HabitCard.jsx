import React, { useState } from 'react';
import '../../DB.css';
import { FiClock, FiMoreVertical, FiCheck } from 'react-icons/fi';
import { BsFire } from 'react-icons/bs';

const HabitCard = () => {
  const [completed, setCompleted] = useState(false);
  const [streak, setStreak] = useState(100); // default streak

  const handleToggle = () => {
    setCompleted(prev => {
      if (!prev) {
        setStreak(streak + 1);
      } else {
        setStreak(streak - 1); // Optional: remove this line if decrement is not allowed
      }
      return !prev;
    });
  };

  return (
    <div className="habit-card">
      <div className="card-header">
        <div className="update-info">
          <FiClock className="icon" />
          <span>Last updated 5 hours ago</span>
        </div>
        <FiMoreVertical className="icon options-icon" />
      </div>

      <h2 className="habit-title">Habit 1</h2>
      <p className="habit-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>

      <div className="card-footer">
        <div className="streak">
          <BsFire className="fire-icon" />
          <span>{streak} days</span>
        </div>

        <button
          className={`check-button ${completed ? 'completed' : ''}`}
          onClick={handleToggle}
        >
          {completed && <FiCheck />}
        </button>
      </div>
    </div>
  );
};

export default HabitCard;
