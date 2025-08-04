import { useEffect } from 'react';
import './App.css';
import HeroBanner from './components/HeroBanner';
import Contact from './components/Contact';
import GitHub from './components/GitHub';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';

function App() {

  useEffect(() => {
    document.title = "Rahul Kumar Mishra | Portfolio";
  }, []);

  return (
    <div className="App" >
        <Navbar />
        <HeroBanner />
        <AboutMe />
        <Skills />
        <Projects />
        <GitHub />
        <Contact />
    </div>
  );
}

export default App;
