import { forwardRef } from "react";
import pathfinder from '../assets/images/Pathfinder2eCover.jpg';
import keylogger from '../assets/images/keylogger.jpg'
import pcracker from '../assets/images/password-cracker.png'
import '../App.css';

const Projects = forwardRef(function Projects(props, ref) {

    return(
        <div className="project-scroll" ref={ref}>
            <div className="projects-title">      
                <h1 className = "secondary-h1">
                    <p>My <span style={{color: "#00599C"}}>Projects</span></p>
                </h1>
            </div>
            <div  className="projects-box">
                <ul className="projects-grid">
                    <li className="projects-container">
                        <div className="project-image">
                            <img className="project-img" src={pathfinder} alt="project-image"></img>
                        </div>
                        <div>
                            <p className="project-title">Pathfinder 2e Initiative Tracker</p>
                        </div>
                        <div>
                            <p className="project-description">Initative tracking for Pathfinder 2e. If you have a low-end PC running some flavor of Linux this will work perfectly for your situation.</p>
                        </div>
                        <ul className="button-list">
                            <li>
                            <button className="project-buttons" type="button" onClick={(e) => { e.preventDefault(); window.open("https://github.com/Hrick87/Pathfinder-2e-Init-Tracker", "_blank");}}>GitHub</button>
                            </li>
                        </ul>
                    </li>
                    <li className="projects-container">
                        <div className="project-image">
                            <img className="project-img" src={keylogger} alt="project-image"></img>
                        </div>
                        <div className="project-title">
                            <p>Selenium Keylogger</p>
                        </div>
                        <div>
                            <p className="project-description">This program logs keyboard entries, automates a router login and port forward, then sends the logs back to an email.</p>
                        </div>
                        <ul className="button-list">
                            <li>
                                <button className="project-buttons" type="button" onClick={(e) => { e.preventDefault(); window.open("https://github.com/Hrick87/Keylogger", "_blank");}}>GitHub</button>
                            </li>
                        </ul>
                    </li>
                    <li className="projects-container">
                        <div className="project-image">
                            <img className="project-img" src={pcracker} alt="project-image"></img>
                        </div>
                        <div className="project-title">
                            <p>Parallel 240 Core Password Cracker</p>
                        </div>
                        <div>
                            <p className="project-description">This program tests the processing power of 240 cores of nanoPi's with the mpi library in order to crack the 56 bit DES key.</p>
                        </div>
                        <ul className="button-list">
                            <li>
                                <button className="project-buttons" type="button" onClick={(e) => { e.preventDefault(); window.open("https://github.com/Hrick87/Password_Cracker", "_target");}}>GitHub</button>                               
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <hr></hr>
        </div>
)});

export default Projects;
