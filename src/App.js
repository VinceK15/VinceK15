import './App.css';
import React from 'react';
import Homepage from './homepage'
import AboutMe from './aboutMe';
import Projects from './projects';
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <h1>Vincent Kuan <img className='logo' src={logo} /></h1> */ }
