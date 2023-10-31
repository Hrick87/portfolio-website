import { forwardRef } from "react";
import '../App.css';

const Skills = forwardRef(function Skills(props, ref) {
    return(
        <div ref={ref} className="skills-scroll">
            <div className="skills-box">
                <div className="skills-title">
                    <h1  className = "secondary-h1"><p>My <span style={{color: "#00599C"}}>Skills</span></p></h1>
                </div>
                <div className="skills-categories">
                    <ul>
                        <li><h2>Languages</h2></li>
                        <ul className="skill-list">
                            <li><button>C++</button></li>
                            <li><button>C</button></li>
                            <li><button>Python</button></li>
                            <li><button>Bash</button></li>
                            <li><button>JavaScript</button></li>
                            <li><button>SQL</button></li>
                            <li><button>Golang</button></li>
                        </ul>
                        <li><h2>Operating Systems</h2></li>
                        <ul className="skill-list">
                            <li><button>Ubuntu Linux</button></li>
                            <li><button>Windows 10</button></li>
                            <li><button>Fedora Linux</button></li>
                            <li><button>Kali Linux</button></li>
                            <li><button>Raspberry Pi OS</button></li>
                        </ul>
                        <li><h2>Frameworks</h2></li>
                        <ul className="skill-list">
                            <li><button>React</button></li>
                            <li><button>Django</button></li>
                        </ul>
                        <li><h2>Libraries</h2></li>
                        <ul className="skill-list">
                            <li><button>Selenium</button></li>
                            <li><button>QT Creator</button></li>
                            <li><button>mpi</button></li>
                            <li><button>openMP</button></li>
                            <li><button>pthreads</button></li>
                        </ul>
                        <li><h2>Databases</h2></li>
                        <ul className="skill-list">
                            <li><button>MariaDB</button></li>
                            <li><button>SQLite</button></li>
                        </ul>
                        <li><h2>Virtual Machines</h2></li>
                        <ul className="skill-list">
                            <li className="google-cloud"><button>Google Cloud Compute Engine</button></li>
                            <li><button>VMware</button></li>
                        </ul>
                        <li><h2>Text Editors</h2></li>
                        <ul className="skill-list">
                            <li><button>VsCode</button></li>
                            <li><button>VIM</button></li>
                        </ul>
                    </ul>
                </div>
            </div>
            <hr></hr>
        </div>
    )
});

export default Skills;