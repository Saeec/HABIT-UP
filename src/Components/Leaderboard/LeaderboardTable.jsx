// src/components/LeaderboardTable.jsx

import React from "react";
import "../../App.css";

function LeaderboardTable() {
  // Create dummy users with rank 1 to 20
  const users = Array.from({ length: 20 }, (_, i) => ({
    rank: i + 1,
    name: "Rohit Bhargav",
    habits: 5,
    days: 300,
  }));

  return (
    <div className="leaderboard-table">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Habits</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.rank}</td>
              <td>{user.name}</td>
              <td>{user.habits} Active Habits</td>
              <td>🔥 {user.days} days</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderboardTable;
