import React from 'react';
import logo from './logo2.jpg';

const aboutMe = () => {
    return <div>
                <div className="name_div">
        <h1 className='myName'>Vincent Kuan <img className='logo' src={logo} /></h1>
        </div>
        <div className="links_div">
        <a href="./homepage" className="links">Home</a>
        <a href="./aboutMe" className="links">About Me</a>
        <a href="./projects" className="links">Projects</a>
        </div>
        <br></br>
        <br></br>
        <p>My Github:  <a href="https://github.com/VinceK15" >https://www.github.com/VinceK15</a></p>
    </div>;
};

export default aboutMe;
