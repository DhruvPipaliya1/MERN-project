import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import NoteState from './context/NoteState.js';
import Alert from './components/Alert.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route exact path="/"  element={<Home showAlert={showAlert}/>} />
        <Route exact path="/about"  element={<About />} />
        <Route exact path="/login"  element={<Login showAlert={showAlert}/>} />
        <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
      </Routes>
      </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
