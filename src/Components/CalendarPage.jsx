import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Calendar.css'; // Custom styles
import Header from './Header';
import Footer from './Footer';

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Dummy habit data – you can later replace this with props or fetched data
  const habitLogs = {
    "2025-07-01": ["Drink Water", "Exercise"],
    "2025-07-03": ["Read Book"],
    "2025-07-04": ["Yoga", "Meditation", "No Sugar"],
  };

  const formatDate = (date) => date.toISOString().split('T')[0];

  const tileClassName = ({ date, view }) => {
    const dateStr = formatDate(date);
    if (view === 'month' && habitLogs[dateStr]) {
      return 'highlight';
    }
    return null;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formattedDate = formatDate(selectedDate);
  const completedHabits = habitLogs[formattedDate] || [];

  return (
    <div>
        <Header/>
    
    <div className="calendar-page">
        
      <h2 >Your Habit Calendar</h2>
      <div className='calendar-wrapper'>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
      /></div>
      <div className="habit-log">
        <h3>Habits on {selectedDate.toDateString()}:</h3>
        {completedHabits.length > 0 ? (
          <ul>
            {completedHabits.map((habit, index) => (
              <li key={index}>{habit}</li>
            ))}
          </ul>
        ) : (
          <p>No habits completed</p>
        )}
      </div>
      <Footer/>
    </div>
    </div>
  );
}

export default CalendarPage;
