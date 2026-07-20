import React, { useState, useEffect } from 'react';

const Spinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
    <div style={{
      width: '40px', height: '40px',
      border: '4px solid rgba(0, 240, 255, 0.1)',
      borderTop: '4px solid var(--primary)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>
      {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
    </style>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div style={{
    background: 'rgba(255, 50, 50, 0.1)',
    border: '1px solid #ff3232',
    color: '#ff3232',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '2rem auto',
    maxWidth: '500px'
  }}>
    <p style={{ margin: 0, fontWeight: 'bold' }}>Error fetching repositories</p>
    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>{message}</p>
  </div>
);

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jalisa2106/repos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const repos = await response.json();
        setData(repos);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const projects = [
    {
      id: 1,
      name: "ByteBack — AI-Driven Code Review Suite",
      pitch: "Architected a zero-trust, serverless AI code review platform delivering real-time, context-aware technical feedback at scale.",
      tags: ["Next.js 16", "Gemini API", "Serverless"],
      theme: "project-card-terminal"
    },
    {
      id: 2,
      name: "ARCADE — RBAC Academic Platform",
      pitch: "Architected a role-based academic platform integrating 5+ modules to connect students, faculty, and alumni.",
      tags: ["Next.js", "MongoDB", "RBAC"],
      theme: "project-card-hub"
    },
    {
      id: 3,
      name: "AI-Powered SWOT Analysis",
      pitch: "Automated evaluation engine utilizing LLM APIs to process structured student records for predictive risk scores.",
      tags: ["Python", "LLM APIs", "Automation"],
      theme: "project-card-terminal"
    },
    {
      id: 4,
      name: "Skeleton API",
      pitch: "Native MS Edge Extension that instantly transforms raw JSON API responses into clean TypeScript interfaces.",
      tags: ["TypeScript", "Extension", "JSON"],
      theme: "project-card-hub"
    }
  ];

  return (
    <section id="projects" className="skills-section" style={{ paddingTop: '8rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      {/* Featured Projects Section */}
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div className="accent-line"></div>
      </div>
      <div className="skills-grid" style={{ marginBottom: '5rem' }}>
        {projects.map((project) => (
          <div key={project.id} className={`skills-category-card ${project.theme || ''}`}>
            <div className="category-header">
              <span className="category-icon">🚀</span>
              <h3>{project.name}</h3>
            </div>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>{project.pitch}</p>
            <div className="skills-badge-container">
              {project.tags.map((tag, index) => (
                <span key={index} className="skill-badge">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Repositories Section */}
      <div className="section-header">
        <h2>GitHub Repositories</h2>
        <div className="accent-line" style={{ background: 'linear-gradient(to right, var(--secondary), var(--primary))' }}></div>
      </div>
      
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      
      {!loading && !error && (
        <div className="skills-grid">
          {data.map((repo) => (
            <div key={repo.id} className="skills-category-card" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="category-header">
                <span className="category-icon">📁</span>
                <h3 style={{ wordBreak: 'break-word', fontSize: '1.1rem' }}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#fff'}>
                    {repo.name}
                  </a>
                </h3>
              </div>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: '0.9rem' }}>
                {repo.description || "No description provided."}
              </p>
              <div className="skills-badge-container">
                {repo.language && <span className="skill-badge" style={{ borderColor: 'rgba(0, 255, 135, 0.3)' }}>{repo.language}</span>}
                <span className="skill-badge" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>⭐ {repo.stargazers_count}</span>
                {repo.forks_count > 0 && <span className="skill-badge" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>🍴 {repo.forks_count}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
