import React from 'react';
import '../Login.css';
import loginImage from '../../src/Assets/login pg img.svg';
import bodyBg from '../../src/Assets/bodybg_login_signup.jpeg';
import name from '../../src/Assets/NAME.png'
import { useNavigate } from 'react-router-dom';
import { Underline } from 'lucide-react';


const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    // Simulate login process
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login successful!");

    // Optional: Redirect to profile or dashboard page
    // window.location.href = "/profile"; // if using traditional HTML
    // OR if using React Router:
    // navigate('/profile');

    e.target.reset();
    navigate('/dashboard')
  };
  const navigate = useNavigate();

  return (
    <div
      className="login-body"
      style={{ backgroundImage: `url(${bodyBg})` }}
    >
      <div className="login-container">

        {/* Left Panel */}
        <div className="left-panel">
          <div className="top-left-title">
            <img src={name}/>
          </div>

          <div className="form-wrapper">
            <h1 className="form-title">WELCOME BACK!</h1>

            <form onSubmit={handleSubmit}>
              <label>
                EMAIL-ADDRESS<br />
                <input type="email" name="email" required />
              </label>
              <br />
              <label>
                PASSWORD<br />
                <input type="password" name="password" required />
              </label>
              <div className="forgot-link">
                <a href="#">Forgot password?</a>
              </div>

              <button type="submit">Log in</button>
              <button type="button" className="google-btn">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                />
                Sign in with Google
              </button>

              <p>
  Don't have an account? <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer',textDecoration: 'underline'}}>Sign Up</span>
</p>
            </form>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <img src={loginImage} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;
