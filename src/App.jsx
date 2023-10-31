import { useRef } from 'react';
import Navbar from './components/Navbar';
import Footer2 from './components/Footer2';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import './App.css';

function App() {
 const aboutRef = useRef(null);
 const skillsRef = useRef(null);
 const projectsRef = useRef(null);
 const contactRef = useRef(null);
  return (
    <> 
      <Navbar aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <div>
        <About ref={aboutRef}/>
        <Skills ref={skillsRef}/>
        <Projects ref={projectsRef}/>
        <Contact ref={contactRef}/>
      </div>
      <Footer2/>
    </>
  )
}

export default App
