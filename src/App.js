import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
// import Login from './components/Login';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {/* <li className="login-link"><Link to="/login">Login</Link></li> */}
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;