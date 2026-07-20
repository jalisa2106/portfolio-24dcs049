import React from 'react';

const Projects = () => {
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
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div className="accent-line"></div>
      </div>
      <div className="skills-grid">
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
    </section>
  );
};

export default Projects;
