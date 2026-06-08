import React from 'react';
import { Award, ShieldAlert, BookOpen, Star, Trophy, Award as CertIcon } from 'lucide-react';

const Certifications = () => {
  const achievements = [
    {
      title: 'LeetCode Problem Solver',
      stat: '300+ Solved',
      desc: 'Solved 300+ Data Structures and Algorithms questions, achieving a top 23% contest ranking.',
      icon: <Trophy className="ach-icon" size={28} />,
      color: 'rgba(245, 158, 11, 0.15)', // Amber
    },
    {
      title: 'HackerRank Rankings',
      stat: '5★ Java / 4★ SQL',
      desc: 'Earned maximum stars for Java proficiency and advanced database query capabilities.',
      icon: <Star className="ach-icon" size={28} />,
      color: 'rgba(16, 185, 129, 0.15)', // Emerald
    }
  ];

  const certificates = [
    {
      title: 'Oracle Cloud Infrastructure (OCI) Generative AI',
      issuer: 'Oracle',
      date: 'Credential Year: 2024/2025',
      icon: <CertIcon size={22} />
    },
    {
      title: 'Salesforce Agentforce Specialist Certification',
      issuer: 'Salesforce',
      date: 'Credential Year: 2025',
      icon: <CertIcon size={22} />
    },
    {
      title: 'AWS Cloud Foundations',
      issuer: 'AWS Academy',
      date: 'Credential Year: 2024',
      icon: <CertIcon size={22} />
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      date: 'Credential Year: 2023',
      icon: <BookOpen size={22} />
    },
    {
      title: 'Full Stack Development',
      issuer: 'freeCodeCamp',
      date: 'Credential Year: 2023',
      icon: <Award size={22} />
    }
  ];

  return (
    <section id="certifications" className="section bg-secondary-adjust">
      <div className="container">
        <h2 className="section-title">Achievements & <span>Certifications</span></h2>
        <p className="section-subtitle">
          Demonstrated problem-solving abilities across global platforms and industry-certified technical skills.
        </p>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((ach, idx) => (
            <div 
              className="achievement-card glass-panel" 
              key={idx}
              style={{ '--accent-glow': ach.color }}
            >
              <div className="ach-icon-wrapper">
                {ach.icon}
              </div>
              <div className="ach-content">
                <span className="ach-stat">{ach.stat}</span>
                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-desc">{ach.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications List Grid */}
        <h3 className="sub-section-title">Industry Credentials</h3>
        <div className="certifications-grid">
          {certificates.map((cert, idx) => (
            <div className="cert-card glass-panel" key={idx}>
              <div className="cert-icon-box">
                {cert.icon}
              </div>
              <div className="cert-content">
                <h4 className="cert-title">{cert.title}</h4>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-dot">•</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
