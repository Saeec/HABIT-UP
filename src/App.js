
import './App.css';
import ProfilePage from './Components/Profile/ProfilePage'
import LBPage from './Components/Leaderboard/LeaderboardPage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';
import DBPage from './Components/Dashboard/DBPage';
import CalendarPage from './Components/CalendarPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<DBPage />} />
        <Route path="/leaderboard" element={<LBPage/>} />
        <Route path="/calendar" element={<CalendarPage/>} />
        <Route path ="/aboutus" element={<AboutUs/>} />
        <Route path ="/settings" element={<AboutUs/>} />
        <Route path ="/profile" element={<ProfilePage/>} />


      </Routes>
    </Router>
  );
}



export default App;
