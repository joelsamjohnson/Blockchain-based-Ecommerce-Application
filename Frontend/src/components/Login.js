import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login=({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login/', {
          username, password
        }); 
        if (response.status === 200) {
          console.log("Login successful:", response.data);
          console.log("User ID", response.data.user_id);
          localStorage.setItem('user_id', response.data.user_id); // Store the user ID in local storage
          onLogin(true);
          navigate('/'); // Navigate to the home page or dashboard after login
        } else {
          console.error("Login failed:", response.data.error);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input className="login-input"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <div>
        New user? <Link to="/register">Register here</Link>
      </div>
    </div>
    
  );
};

export default Login;