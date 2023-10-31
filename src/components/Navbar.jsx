import React from "react";
import './Navbar.css';
import { ImLink } from '/react-icons/im'

function Navbar({aboutRef, skillsRef, projectsRef, contactRef})
{
    return(
        <nav>
            <a href='/' className="title">Hunter Rick</a>
            <ul>
                <li onClick={() => aboutRef.current.scrollIntoView({behavior: "smooth"})} className="navLink">About</li>
                <li onClick={() => skillsRef.current.scrollIntoView({behavior: "smooth"})} className="navLink">Skills</li>
                <li onClick={() => projectsRef.current.scrollIntoView({behavior: "smooth"})} className="navLink">Projects</li>
                <li onClick={() => contactRef.current.scrollIntoView({behavior: "smooth"})} className="navLink">Contact</li>
                <li><a href="https://github.com/hrick87" className="navLink" target="_blank">GitHub <ImLink/></a></li>
            </ul>
        </nav>
    )
}

export default Navbar;