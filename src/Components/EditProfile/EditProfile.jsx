import React, { useState } from 'react';
import '../../EditProfile.css';
import pfp from '../../Assets/pfp.png';

const EditProfile = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    username: '',
    newPassword: '',
    confirmPassword: '',
    oldPassword: '',
    about: ''
  });

  const [isOldPasswordValid, setIsOldPasswordValid] = useState(false);
  const CORRECT_OLD_PASSWORD = "oldpass123"; // Simulated correct password

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === 'oldPassword') {
      setIsOldPasswordValid(value === CORRECT_OLD_PASSWORD);
    }
  };

  const handleSave = () => {
    if (!isOldPasswordValid && (form.newPassword || form.confirmPassword)) {
      alert("Please enter the correct old password.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }

    console.log("Profile saved with:", form);
    alert("Profile saved!");
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-left-card">
        <img src={pfp} alt="Profile" className="edit-avatar" />
        <h2>Sahil Dighe</h2>
        <p className="username">username: whosahil1</p>
        <div className="about-box">
          <h3>About</h3>
          <p>
            Professional overthinker, part-time snack enthusiast. Thrives on caffeine,
            sarcasm, and pretending to be productive...
          </p>
        </div>
      </div>

      <div className="edit-right-card">
        <section className="section-block">
          <h3><span className="icon">🖊</span> Personal Details</h3>
          <div className="edit-row">
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email ID" />
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
            <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" />
          </div>
        </section>

        <section className="section-block">
          <h3><span className="icon">🔒</span> Password</h3>
          <div className="edit-row">
            <input
              type="password"
              name="oldPassword"
              value={form.oldPassword}
              onChange={handleChange}
              placeholder="Old Password"
            />
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              placeholder="New Password"
              disabled={!isOldPasswordValid}
            />
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm New Password"
              disabled={!isOldPasswordValid}
            />
          </div>
          {!isOldPasswordValid && form.oldPassword && (
            <p style={{ color: 'red', marginTop: '8px' }}>Incorrect old password.</p>
          )}
        </section>

        <section className="section-block">
          <h3><span className="icon">🖊</span> About Me</h3>
          <textarea
            name="about"
            value={form.about}
            onChange={handleChange}
            placeholder="Enter Description in 30 words..."
          />
        </section>

        <div className="save-btn-container">
          <button className="save-btn" onClick={handleSave}>💾 Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
