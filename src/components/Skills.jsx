import React from 'react';

const Skills = ({ skillList }) => {
  const defaultSkills = ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "MySQL"];
  const listToRender = (skillList && skillList.length > 0) ? skillList : defaultSkills;

  // Skills categories based on resume details
  const categories = [
    {
      title: "Languages & Frontend",
      skills: ["C", "C++", "Java", "Python", "JS", "TypeScript", "React", "Next.js", "Vite", "Tailwind CSS"],
      icon: "💻",
      description: "Writing typed algorithms and building highly responsive web user interfaces."
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "FastAPI", "MongoDB", "PostgreSQL", "MySQL", "Neon"],
      icon: "⚙️",
      description: "Developing fast, scalable server-side systems and designing database schemas."
    },
    {
      title: "DevOps & Cloud",
      skills: ["Git", "GitHub", "VSCode API", "Vercel"],
      icon: "🛠️",
      description: "Deploying applications, tracking code versions, and extending developer tooling."
    },
    {
      title: "AI & Data Science",
      skills: ["LLM APIs", "Random Forest", "Prompt Engineering", "Google Looker Studio", "JSON Processing"],
      icon: "🤖",
      description: "Integrating modern language models, parsing structures, and visualizing insights."
    }
  ];

  return (
    <section id="skills" className="skills-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-header">
        <h2>Technical Arsenal</h2>
        <div className="accent-line"></div>
      </div>
      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="skills-category-card">
            <div className="category-header">
              <span className="category-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>
            {cat.description && (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', marginTop: '0', lineHeight: '1.5' }}>
                {cat.description}
              </p>
            )}

            {cat.bullets && (
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: '1.6' }}>
                {cat.bullets.map((b, bIdx) => (
                  <li key={bIdx} style={{ marginBottom: '0.4rem' }}>{b}</li>
                ))}
              </ul>
            )}

            <div className="skills-badge-container">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
