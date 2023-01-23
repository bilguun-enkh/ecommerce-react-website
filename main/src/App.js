import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/SignUp';
import Home from './components/Home';
import LogIn from './components/LogIn';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div>


  );
}

export default App
