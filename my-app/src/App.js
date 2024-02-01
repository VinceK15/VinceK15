import './App.css';
import React from 'react';
import Homepage from './homepage'
import AboutMe from './aboutMe';
import Projects from './projects';
import { Route, BrowserRouter, Routes } from 'react-router-dom'

//<BrowserRouter basename={process.env.PUBLIC_URL}> previously

function App() {
  return (
    <BrowserRouter basename="/VinceK15">
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
