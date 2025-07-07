import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import NoteState from './context/NoteState.js';
import Alert from './components/Alert.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login.js';
import Signup from './components/Signup.js';

function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      <Alert message="This is alert"/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
