// src/components/Rankers.jsx
import React from "react";
import topThree from "./TopThree";
import "../../App.css"; // if not already imported globally


import { Trophy } from "lucide-react";



function Rankers() {
  const medalColors = {
    gold: "#facc15",
    silver: "#e5e7eb",
    bronze: "#d97706",
  };

  // Display order: 3rd - 1st - 2nd
  const order = [2, 0, 1];

  return (
    <div className="rankers-wrapper">
      {order.map((i) => {
        const user = topThree[i];
        return (
          <div className={`ranker-card rank-${user.rank}`} key={user.rank}>
            <div className="avatar">
              <img src={user.avatar} alt={user.name} />
            </div>
            <div className="name">{user.name}</div>
            <div className="card">
              <Trophy size={20} color={medalColors[user.medal]} />
              <div className="streak">🔥 {user.days} days</div>
              <div className="habits">{user.habits} Active Habits</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rankers;
