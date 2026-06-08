import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  // Sync theme with document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Background glow effects */}
      <div className="bg-glow animate-pulse-slow" style={{ top: '10%', left: '-10%' }}></div>
      <div className="bg-glow animate-pulse-slow" style={{ top: '40%', right: '-10%', background: 'var(--color-secondary-glow)' }}></div>
      <div className="bg-glow animate-pulse-slow" style={{ bottom: '15%', left: '5%', background: 'var(--color-accent-glow)' }}></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
