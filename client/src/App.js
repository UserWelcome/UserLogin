import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const handleLogin = (userData) => {
    // Set isAuthenticated to true and update user data when the user successfully logs in
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Set isAuthenticated to false and clear user data when the user logs out
    setIsAuthenticated(false);
    setUser(null);
  };
  return (
    <Router isAuthenticated={isAuthenticated} user={user}>
      <Routes>
        <Route path='/' element={<Login onLogin={handleLogin}/>}/>
        <Route path='/home' element={<Home onLogout={handleLogout}/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </Router>
  );
}

export default App;
