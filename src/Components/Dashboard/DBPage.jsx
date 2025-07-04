import React, { useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SearchBar from "./SearchBar";
import HabitCard from "./HabitCard";
import '../../DB.css';
import right from '../../Assets/Arrow right-circle.png';
import left from '../../Assets/Arrow left-circle.png'; 
import Progress from "./Progress";
import TodoList from "./ToDoList";

function DBPage() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <SearchBar />
      
      <div className="habits-section">
        <div className="habits-header">
          <h2 className="habits-title">Your Habits</h2>
          <button className="add-habit-btn">
            
            + Add Habit
          </button>
        </div>
        
        <div className="habit-carousel-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>
            <img src={left} alt="Scroll left"/>
          </button>

          <div className="habit-row-container" ref={scrollRef}>
            <div className="habit-row">
              <HabitCard />
              <HabitCard />
              <HabitCard />
              <HabitCard />
              <HabitCard />
              <HabitCard />
              <HabitCard />
              <HabitCard />
            </div>
          </div>

          <button className="scroll-btn right" onClick={scrollRight}>
            <img src={right} alt="Scroll right"/>
          </button>
        </div>
      </div>
      <div className="Lower-Dashboard">
  <div className="progress-wrapper">
    <h2 className="Streakheading">Your Habit Streak</h2>
    <Progress />
  </div>

  <div className="todo-wrapper">
    <h2 className="todo-heading">To-Do List</h2>
    <TodoList />
  </div>
</div>


      <Footer />
    </div>
  );
}

export default DBPage;