import React from 'react';
import { Terminal, Layout, Server, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Terminal size={22} className="skill-cat-icon" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 85 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={22} className="skill-cat-icon" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML5 / CSS3', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={22} className="skill-cat-icon" />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'Python Flask', level: 75 }
      ]
    },
    {
      title: 'Databases & Storage',
      icon: <Database size={22} className="skill-cat-icon" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Settings size={22} className="skill-cat-icon" />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Visual Studio Code', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-secondary-adjust">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <p className="section-subtitle">
          My technical expertise spanning programming languages, modern web development libraries, databases, and version control tools.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div className="skill-card glass-panel" key={idx}>
              <div className="skill-card-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, sIdx) => (
                  <div className="skill-item" key={sIdx}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
