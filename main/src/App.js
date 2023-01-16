import './App.css';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';


function App() {
  
  return (
    <div>
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/register'}>Register</Link> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>


  );
}

export default App
