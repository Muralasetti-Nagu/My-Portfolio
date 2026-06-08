import React from 'react';
import { ArrowRight, Github, Linkedin, Code } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section container">
      <div className="hero-content">
        <div className="badge-wrapper">
          <span className="badge-glow-dot"></span>
          <span className="badge-text">Available for Internships & Full-Time Roles</span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="highlight-text">Naga Chakra Sathya Sai Muralasetti</span>
        </h1>

        <h2 className="hero-subtitle">
          Full Stack Developer & AI Enthusiast
        </h2>

        <p className="hero-description">
          I craft clean, high-performance web applications and implement data-driven AI solutions.
          Currently pursuing my B.Tech in Artificial Intelligence with a passion for building robust software that makes an impact.
        </p>

        <div className="hero-actions">
          <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
            Explore My Projects <ArrowRight size={18} />
          </button>
          <button onClick={() => handleScrollTo('contact')} className="btn btn-secondary">
            Get in Touch
          </button>
        </div>

        <div className="social-links">
          <a href="https://github.com/Muralasetti-Nagu" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/nagu-muralasetti" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="https://leetcode.com/u/Muralasetti_Nagu" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
            <Code size={22} />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-shape-container">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="developer-graphic glass-panel">
            <div className="window-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="graphic-code">
              <p><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</p>
              <p className="indent"><span className="property">name</span>: <span className="string">"Naga Chakra Sathya Sai"</span>,</p>
              <p className="indent"><span className="property">role</span>: <span className="string">"Full Stack Developer"</span>,</p>
              <p className="indent"><span className="property">education</span>: <span className="string">"B.Tech in Artificial Intelligence"</span>,</p>
              <p className="indent"><span className="property">focus</span>: [<span className="string">"Web Apps"</span>, <span className="string">"AI/ML Systems"</span>],</p>
              <p className="indent"><span className="property">skills</span>: &#123;</p>
              <p className="double-indent"><span className="property">frontend</span>: [<span className="string">"React.js"</span>, <span className="string">"Tailwind"</span>],</p>
              <p className="double-indent"><span className="property">backend</span>: [<span className="string">"Node.js"</span>, <span className="string">"Flask"</span>],</p>
              <p className="double-indent"><span className="property">databases</span>: [<span className="string">"MySQL"</span>, <span className="string">"MongoDB"</span>]</p>
              <p className="indent">&#125;,</p>
              <p className="indent"><span className="property">isPassionate</span>: <span className="boolean">true</span></p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
