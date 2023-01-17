import './App.css';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Register from './components/SignUp';
import Home from './components/Home';
import LogIn from './components/LogIn';


function App() {
  
  return (
    <div>
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/register'}>Register</Link> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />} />

      </Routes>
    </div>


  );
}

export default App
