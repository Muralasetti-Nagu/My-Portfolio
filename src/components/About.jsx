import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Green Internship - One Million for One Billion (1M1B)',
      duration: 'May 2025 - Aug 2025',
      location: 'Remote',
      points: [
        'Worked on a technology-driven sustainability initiative, collaborating with mentors and stakeholders to translate sustainability goals into clear software requirements.',
        'Supported the development of a full-stack sustainability project by integrating frontend components with backend services for secure data data-handling and smooth user workflows.',
        'Analyzed platform usage data and outputs to identify improvement areas, contributing to a 15% improvement in resource efficiency.'
      ]
    },
    {
      role: 'Python Full Stack Developer Intern',
      company: 'Full Stack Development Intern - KTS',
      duration: 'Dec 2023 - Mar 2024',
      location: 'Kakinada, Andhra Pradesh',
      points: [
        'Collaborated with a team of 3 developers to design and build a responsive weather forecasting web application with a simple and user-friendly interface.',
        'Developed frontend features using HTML, CSS, and JavaScript and implemented backend services using Python (Flask), integrating real-time Weather APIs to display live data with reliable performance.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence',
      institution: 'Pragati Engineering College',
      duration: 'July 2024 - June 2027',
      location: 'Surampalem, Andhra Pradesh',
      metric: 'CGPA: 8.7 / 10'
    },
    {
      degree: 'Diploma in Computer Science and Engineering',
      institution: 'Kakinada Institute of Engineering Technology',
      duration: 'August 2021 - May 2024',
      location: 'Kakinada, Andhra Pradesh',
      metric: 'CGPA: 9.1 / 10'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">
          A dedicated software engineer pursuing specialized studies in AI, combining full-stack development skills with clean, reliable architecture.
        </p>

        <div className="about-grid">
          {/* About Bio / Details */}
          <div className="about-bio glass-panel">
            <h3>My Journey</h3>
            <p>
              I am a technology enthusiast who loves solving real-world problems through code. 
              My background spans across a rigorous Diploma in Computer Science & Engineering 
              followed by an ongoing Bachelor of Technology specializing in Artificial Intelligence.
            </p>
            <p>
              During my internships, I have collaborated with diverse teams, worked on sustainability initiatives, 
              integrated complex REST APIs, and managed data pipelines. 
              I am highly driven to build web applications that look gorgeous, function smoothly, and solve tangible problems.
            </p>

            <div className="bio-details">
              <div className="detail-item">
                <span className="detail-title">Based in:</span>
                <span className="detail-value">Andhra Pradesh, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Email:</span>
                <span className="detail-value">nagumuralasetti59@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Phone:</span>
                <span className="detail-value">+91 9391775574</span>
              </div>
            </div>
          </div>

          {/* Timeline (Experience & Education) */}
          <div className="timeline-container">
            <div className="tabs-header">
              <button 
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <Briefcase size={18} /> Experience
              </button>
              <button 
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <GraduationCap size={18} /> Education
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'experience' ? (
                <div className="timeline">
                  {experience.map((exp, idx) => (
                    <div className="timeline-item" key={idx}>
                      <div className="timeline-dot"></div>
                      <div className="timeline-content glass-panel">
                        <div className="timeline-meta">
                          <span className="timeline-duration"><Calendar size={14} /> {exp.duration}</span>
                          <span className="timeline-location"><MapPin size={14} /> {exp.location}</span>
                        </div>
                        <h4 className="timeline-title">{exp.role}</h4>
                        <h5 className="timeline-subtitle">{exp.company}</h5>
                        <ul className="timeline-details">
                          {exp.points.map((pt, pIdx) => (
                            <li key={pIdx}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="timeline">
                  {education.map((edu, idx) => (
                    <div className="timeline-item" key={idx}>
                      <div className="timeline-dot"></div>
                      <div className="timeline-content glass-panel">
                        <div className="timeline-meta">
                          <span className="timeline-duration"><Calendar size={14} /> {edu.duration}</span>
                          <span className="timeline-location"><MapPin size={14} /> {edu.location}</span>
                        </div>
                        <h4 className="timeline-title">{edu.degree}</h4>
                        <h5 className="timeline-subtitle">{edu.institution}</h5>
                        <span className="timeline-metric">{edu.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
