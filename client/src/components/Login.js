import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const navigate= useNavigate();
const handleLogin= async(e)=>{
    e.preventDefault();
     // Check if any of the required fields is empty
     if (!email || !password) {
        toast.error('All fields are mandatory');
        return;
      }
      try {
     const resp = await axios.post('https://userloginbackend.onrender.com/api/auth/login', { email, password })
     const token = resp.data.token;
     sessionStorage.setItem('token',token);
     setEmail('');
     setPassword("");
     toast.success('UserAuthicated...')
        
     navigate('/home');
      } catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error('Invalid email or password. Please try again.');
          } else {
            toast.error('An unexpected error occurred. Please try again later.');
          }
      }
}
    return (
        <div className='container'>
            <form onSubmit={handleLogin}> 
          <center> <h3>Login</h3></center>  
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control" type="email" placeholder="Email address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" > login
                    </button>
                </div>
                <p className='text-center'>
                    Don't have an account? <Link to="/register">Register here </Link>
                </p>

            </form>
            <ToastContainer />
        </div>
    )
}

export default Login