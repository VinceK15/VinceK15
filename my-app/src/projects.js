import React from 'react';
import logo from './logo2.jpg';
import preview1 from './img/kidzonepreview.png';

const projects = () => {
    return <div>
                <div className="name_div">
        <h1 className='myName'>Vincent Kuan <img className='logo' src={logo} /></h1>
        </div>
        <div className="links_div">
        <a href="./homepage" className="links">Home</a>
        <a href="./aboutMe" className="links" >About Me</a>
        <a href="./projects" className="links">Projects</a>
        </div>
{/*
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
*/}

        <div className="project3">
        <p className="project3title">Vaughan Public Library - KidZone: 
        <a href="https://www.vaughanpl.info/kidzone/" className="kidzonelink">Website</a></p>
        <a href="https://www.vaughanpl.info/kidzone/"><img className="kidzonepreview" src={preview1}></img></a>
        </div>

        <div className="project1">
        <p className="project1title">Taskmanager with React.JS:
        <a href="https://github.com/VinceK15/taskmanager" className="githublink1">GitHub</a></p>
        <iframe className="project1video" width="500" height="400" src="https://youtube.com/embed/ISL8pkKJfSY"> </iframe>
        </div>

        <div className="project2">
        <p className="project2title">Employee Manager App with MERN stack:
        <a href="https://github.com/VinceK15/Employee-Manager-App" className="githublink2">GitHub</a></p>
        <iframe className="project2video"width="500" height="400" src="https://youtube.com/embed/nzNIHKVOVcM"> </iframe>
        </div>

    </div>;

};

export default projects;
