import { forwardRef } from "react";
import '../App.css';
import profilepicture from '../assets/images/profile-temp.png';
import resume from '../assets/files/Hunter-Rick-Resume.pdf'

const About = forwardRef(function About(props, ref) {
    return(
        <div ref={ref}>
            <div className="about-grid">  
                <div className="about-box">
                    <div className="about-title">
                        <h1>
                            <p>Hello!</p>
                            <p>I'm <span style={{color: "#00599C"}}>Hunter Rick</span></p>
                        </h1>
                        <h3>software engineer</h3>
                    </div>
                    <div className="about-body">
                        <p>I'm a Junior Software Developer, and I like to code in C++, C, and Python. I've employed multiple Linux distrubutions, parallel programming, and database design in personal and academic projects. I love tackling exciting challenges and firmly believe in the power of teamwork and collaboration to turn those lightbulb moments into reality. I'm on a mission to make a positive impact through my work. When I'm not coding, you can find me working out, practicing guitar, or playing board games. If you're on the lookout for a friendly and versatile developer to join your project or just want to chat about my journey in software development, check out my portfolio and give me a shout. Let's build cool stuff together, one line of code at a time!</p>
                        <a href={resume} download="Hunter-Rick-Resume" target='_blank'>
                            <button className="download-cv">Download my CV</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <img src={profilepicture} alt="profile-picture"></img>
                </div>
            </div> 
            <hr></hr>
        </div>
    );
});

export default About;