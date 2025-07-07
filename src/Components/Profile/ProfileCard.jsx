
// src/components/UserProfileCard.jsx
import React from 'react';
import pfp from "../../Assets/pfp.png";
import "../../ProfileCard.css";

const user = {
  name: "Sahil Dighe",
  username: "whosahil",
  email: "sahildighe1@gmail.com",
  phone: "9767xxx320",
  dob: "12/07/25",
  joinDate: "12/07/25",
  gender: "Male",
  habits: ["Gym", "Walk", "Guitar"],
  streak: 100,
  leaderboardRank: 53
};

const UserProfileCard = () => {
  return (
    <div className="profile-container">
    <div className="profile-left">
      <img src={pfp} alt="Profile" className="profile-pic" />
      <h2>{user.name}</h2>
      <p className="username">username: {user.username}</p>

      <div className="left-details-box">
        <p><strong>Date Joined:</strong> {user.joinDate}</p>
        <p><strong>Phone no:</strong> {user.phone}</p>
        <p><strong>Email Id:</strong> {user.email}</p>
        <p><strong>D.O.B:</strong> {user.dob}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
      </div>
    </div>
      <div className="profile-right">
        <div className="leaderboard">
          <p>LeaderBoard Rank</p>
          <div className="rank">
            🏆 {user.leaderboardRank}
          </div>
        </div>
        <div className="streak">
          <p>Highest Streak</p>
          <h2>🔥 {user.streak} Days</h2>
        </div>
        <div className="habits">
          {user.habits.map((habit, idx) => (
            <div className="habit-row" key={idx}>
              <span>Habit</span>
              <span>{habit}</span>
            </div>
          ))}
        </div>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfileCard;
