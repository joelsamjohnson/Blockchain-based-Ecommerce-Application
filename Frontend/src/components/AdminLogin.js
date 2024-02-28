import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const AdminLogin=({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/adminlogin/', {
                username,password
            });
            if (response.status === 200) {
                console.log("Login successful:", response.data);
                console.log("User ID", response.data.user_id);
                localStorage.setItem('user_id', response.data.user_id); // Store the user ID in local storage
                onLogin(true);
                navigate('/AdminDashboard'); // Navigate to the home page or dashboard after login
              } else {
                console.error("Login failed:", response.data.error);
              }
        } catch (error) {
            console.error("Error during login:", error);
          }
    }

  return (
    <div>AdminLogin</div>
  )
}

export default AdminLogin