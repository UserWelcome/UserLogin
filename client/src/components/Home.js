import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate= useNavigate();
  const performLogout=async()=>
  {
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <div className='container'>
      <button className='logout' onClick={performLogout}>LOGOUT</button>
      Welcome to cricketbot webpage.

    </div>
    
  )
}

export default Home