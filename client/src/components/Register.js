import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const navigate= useNavigate();
const handleRegister= async(e)=>{
    e.preventDefault();
     // Check if any of the required fields is empty
     if (!userName || !email || !password) {
        toast.error('All fields are mandatory');
        return;
      }
      try {
     const resp = await axios.post('http://localhost:4000/api/auth/register', {userName,  email, password })
     const token = resp.data.token;
     sessionStorage.setItem('token',token);
     setEmail('');
     setPassword("");
     toast.success('User Registered Successfully! Redirecting to login page...');
      setUserName('');
        
     navigate('/');
      } catch (error) {
        if (error.response && error.response.status === 400) {
            toast.error('Invalid email or password. Please try again.');
          } else {
            toast.error('An unexpected error occurred. Please try again later.');
          }
      }
}
    return (
        <div className='container'>
            <form onSubmit={handleRegister}> 
          <center> <h3>Register</h3></center>  
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control" type="email" placeholder="Email address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Username</label>
                    <input className="form-control" type="text" placeholder="Username" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" > Register
                    </button>
                </div>
                <p className='text-center'>
                Already have an account? <Link to="/">Login </Link>
                </p>

            </form>
            <ToastContainer />
        </div>
    )
}

export default Register;