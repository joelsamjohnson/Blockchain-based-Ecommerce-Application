import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [email, setEmail] = useState('');
    const [ethereum_address, setEthereumaddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('M'); // Default to 'M' for Manufacturer
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }


        try {
            // navigate('/login');
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                name,
                place,
                email,
                ethereum_address,
                userType,
                password,
                confirmPassword
            });
            console.log(response.data);
            if (response.status) {
                navigate('/login');
            } else {
                alert('Registration failed!');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('An error occurred during registration!');
        }
    };


    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h2>Register</h2>
                <div>
                    <label>User Type:</label>
                    <select value={userType} onChange={(e) => setUserType(e.target.value)} className='login-input'>
                        <option value="M">Manufacturer</option>
                        <option value="D">Distributor</option>
                        <option value="R">Retailer</option>
                        <option value="C">Consumer</option>
                    </select>
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='login-input' />
                </div>
                <div>
                    <label>Place:</label>
                    <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} className='login-input' />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='login-input' />
                </div>
                <div>
                    <label>Ethereum Address:</label>
                    <input type="text" value={ethereum_address} onChange={(e) => setEthereumaddress(e.target.value)} required className='login-input' />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className='login-input' />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className='login-input' />
                </div>
                <button type="submit" className='login-button'>Register</button>
            </form>
        </div>
    );
}


export default Register;

