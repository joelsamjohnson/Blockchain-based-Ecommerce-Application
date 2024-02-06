import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [company, setCompany] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/register/', {
                email: email,
                username: username,
                password: password,
            });
            console.log(response.data);
            if (response.status === 200 || response.status === 201) {
                // Redirect to login page
                navigate('/login');
            } else {
                // Handle other statuses or errors
                alert('Registration failed!');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('An error occurred during registration!');
        }
    };

    return (
        <div className='login-container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className='login-form'>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} className='login-input'></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} className='login-input'></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='login-input'/>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className='login-input'/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className='login-input'/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className='login-input'/>
                </div>
                <div>
                    <label>Company Name:</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className='login-input'></input>
                </div>
                <button type="submit" className='login-button'>Register</button>
            </form>
        </div>
    );
}

export default Register;
