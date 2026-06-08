import React from 'react';
import { Github, Linkedin, Code, ArrowUp } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="logo-spark">⚡</span>
          <p>Full Stack Developer & AI Enthusiast</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/Muralasetti-Nagu" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/nagu-muralasetti" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/Muralasetti_Nagu" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
            <Code size={20} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Muralasetti Naga Chakra Sathya Sai. All rights reserved.</p>
          <button onClick={handleScrollToTop} className="scroll-to-top" aria-label="Scroll to top">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
