import React, { useState } from 'react';
import '../Signup.css';
import signupImage from '../../src/Assets/signup img.png';
import bodyBg from '../../src/Assets/bodybg_login_signup.jpeg';
import name from '../../src/Assets/NAME.png'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { type, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Signup successful!");
    // You can send the data to a backend here
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div
      className="signup-body"
      style={{ backgroundImage: `url(${bodyBg})` }}
    >
      <div className="signup-container">
        {/* Left Panel */}
        <div className="left-panel">
          <div className="top-left-title">
            <img src={name}></img>
          </div>

          <div className="form-wrapper">
            <h1>Start your journey now!</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <p>NAME</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <p>EMAIL-ADDRESS</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <p>SET UP PASSWORD</p>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <p>REWRITE PASSWORD</p>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="primary-btn">Sign in</button>

              <button type="button" className="google-btn">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                />
                Sign in with Google
              </button>

              <p className="login-link">
                Already have an account? <a href="#">Log in</a>
              </p>
            </form>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <img src={signupImage} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
