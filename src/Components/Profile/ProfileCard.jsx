// src/components/UserProfileCard.jsx
import React from 'react';
//import './UserProfileCard.css';
import pfp from "../../Assets/pfp.png";  // Using forward slashes
import "../../App.css"
const user = {
  name: "Adder Stark",
  email: "adder@example.com",
  dob: "1999-05-15",
  joinDate: "2024-01-01",
  phone: "+91-9876543210",
  gender: "Non-binary"
};
const UserProfileCard = () => {
  return (
    <div className='center-part'>
    <div className='profile-heading'><h3>MY PROFILE</h3></div>
    <div className="profile-card">
        <div className="user-info">
          <div className="user-pfp"><img src={pfp} className='pfp'/></div>
          <div className="user-details">
            <h3 className='user-name'>{user.name}</h3>
            <div className='About-me'><p className='abt'>Leveling habits everyday 🚀</p></div>

         <div className='inline-details'>   
            <div className="details-1">
              <p className="email"><span>Email: </span>{user.email}</p>
              <p className="dob"><span>Date of Birth:</span> {user.dob}</p>
            </div>

      
        <div className="details-2">
              <p className="joined-date"><span>Joined Date:</span> {user.joinDate}</p>
              <p className="phone"><span>Phone:</span> {user.phone}</p>
              <p className='gender'><span>Gender:</span>{user.gender}</p>
            </div>
         </div>
         </div>
     </div>
        
      
    </div>
    <div className='side-links'>
        <a href='/'className='LogOut'>Log Out</a>
        <a href="/" className='EditProfile'>Edit Profile</a> 
    </div>
    </div>
  );
};

export default UserProfileCard;