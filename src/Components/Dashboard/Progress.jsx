import React from 'react';
import '../../DB.css';

const habits = [
  { name: 'Habit 1', completedDays: 6 },
  { name: 'Habit 2', completedDays: 4 },
  { name: 'Habit 3', completedDays: 3 },
  { name: 'Habit 3', completedDays: 3 },
  { name: 'Habit 3', completedDays: 3 },
  { name: 'Habit 3', completedDays: 3 }
];

const Progress = () => {
  return (
    <div className="habit-container">
      {habits.map((habit, index) => {
        const progress = (habit.completedDays / 7) * 100;
        return (
          <div className="habit-row" key={index}>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="habit-name">{habit.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
