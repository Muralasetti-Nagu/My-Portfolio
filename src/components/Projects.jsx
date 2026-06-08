import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, X, CheckCircle } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'preptrack',
      title: 'Prep-Track SaaS Application',
      subtitle: 'Coding Interview Prep Dashboard',
      category: 'fullstack',
      featured: true,
      tech: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      description: 'A comprehensive SaaS application designed to help software developers organize, monitor, and accelerate their technical interview preparation.',
      longDescription: 'Prep-Track is a centralized performance tracker built for candidates aiming for Tier-1 engineering roles. It enables users to record solved problems, manage code snippets, categorize questions by platform/topic, and visualizes preparation metrics like consistency streaks, topic distribution, and problem-solving pace.',
      features: [
        'Interactive Analytics Dashboard: Features visual breakdowns of solved problems by platform, difficulty, and core topics.',
        'Platform Integration & Metrics: Supports logging from platforms such as LeetCode, HackerRank, and Codeforces.',
        'LeetCode-Style Progress Heatmap: Renders calendar heatmaps and user consistency streaks to drive motivation.',
        'Problem repository: Manage solved questions with tags, descriptions, time complexities, and full solution code snippets.',
        'Robust Authentication: Secure JWT-based registration, logins, and session management.'
      ],
      github: 'https://github.com/Muralasetti-Nagu/preptrack-saas', // Custom GitHub path
      live: '#'
    },
    {
      id: 'carbontrack',
      title: 'Carbon Track',
      subtitle: 'Household Carbon Emissions Tracker',
      category: 'fullstack',
      featured: false,
      tech: ['React.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'Recharts'],
      description: 'A full-stack emission analytics platform designed to calculate, track, and recommend reductions in household carbon footprints.',
      longDescription: 'Carbon Track allows households to quantify their monthly utility consumption (electricity, fuel, water, waste) and converts it into metric tons of CO2. Through clean dashboards and automated tracking, users receive data-driven optimization points to lower utility costs and carbon footprints.',
      features: [
        'Secure CRUD Operations: Log and modify historical emission entries, backed by secure authentication protocols.',
        'Recharts Visualizations: Displays interactive line charts, pie charts, and monthly progress trends.',
        'Carbon Calculator: Standardized calculation algorithms based on consumption inputs.',
        'Actionable Recommendations: Intelligent advice systems contributing to a 15% reduction in overall resource usage.'
      ],
      github: 'https://github.com/Muralasetti-Nagu/Carbon-Footprint-App',
      live: '#'
    },
    {
      id: 'imdbexplorer',
      title: 'IMDB Movie Explorer',
      subtitle: 'Movie Discovery and Curation Engine',
      category: 'frontend',
      featured: false,
      tech: ['React.js', 'TMDB API', 'Tailwind CSS', 'Axios', 'React Router'],
      description: 'A modern single-page movie search and discovery catalog powered by TMDB API with real-time analytics.',
      longDescription: 'This single-page React app offers a fluid discovery catalog for movies and series. Implemented with strict component modularity, the dashboard fetches ratings, summaries, posters, and cast lists from TMDB, managing caching and API load to deliver instant transitions.',
      features: [
        'TMDB REST Integration: Fetches real-time movie posters, trailer files, genres, and live ratings.',
        'Advanced Filtering: Instant searches, category tabs, and pagination setups.',
        'API Handling Optimization: Leveraged debounces and custom request caches to speed page loads by 40%.'
      ],
      github: 'https://github.com/Muralasetti-Nagu/Imdb-Clone',
      live: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">
          A collection of projects showcasing full-stack capabilities, database designs, complex APIs, and beautiful responsive interfaces.
        </p>

        {/* Filters */}
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              className={`project-card glass-panel ${project.featured ? 'project-featured' : ''}`}
              key={project.id}
            >
              {project.featured && (
                <div className="featured-badge">
                  <Sparkles size={14} /> Featured Project
                </div>
              )}
              
              <div className="project-content">
                <span className="project-category">{project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}</span>
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech-tags">
                  {project.tech.map((t, idx) => (
                    <span className="tech-tag" key={idx}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="btn btn-secondary btn-sm"
                  >
                    View Details
                  </button>
                  <div className="icon-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close Modal">
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <span className="project-category">{selectedProject.category === 'fullstack' ? 'Full Stack' : 'Frontend'}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <h4 className="modal-subtitle">{selectedProject.subtitle}</h4>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Overview</h4>
                <p>{selectedProject.longDescription}</p>
              </div>

              <div className="modal-section">
                <h4>Key Features</h4>
                <ul className="modal-features">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className="feature-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="modal-tech-tags">
                  {selectedProject.tech.map((t, idx) => (
                    <span className="tech-tag" key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Github size={18} /> View Source Code
              </a>
              {selectedProject.live !== '#' && (
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
