import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "NexusAI",
      pitch: "An AI-powered code review platform with terminal-style UI.",
      tags: ["React", "Node.js", "OpenAI API"],
      theme: "project-card-terminal"
    },
    {
      id: 2,
      name: "CampusConnect",
      pitch: "A scalable community/campus hub with auth, events, and resources.",
      tags: ["Next.js", "MongoDB", "Express"],
      theme: "project-card-hub"
    },
    {
      id: 3,
      name: "DataSense",
      pitch: "An AI-assisted analytics dashboard with natural-language querying.",
      tags: ["Python", "FastAPI", "React"],
      theme: "project-card-terminal"
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
