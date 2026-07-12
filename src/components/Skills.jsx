import React from 'react';

const Skills = ({ skillList }) => {
  const defaultSkills = ["React", "JavaScript", "HTML & CSS", "Node.js", "Vite", "Git"];
  const listToRender = (skillList && skillList.length > 0) ? skillList : defaultSkills;

  // Let's categorize some skills for visual richness
  const categories = [
    {
      title: "Core Technologies",
      skills: listToRender,
      icon: "💻"
    },
    {
      title: "Tools & Ecosystem",
      skills: ["Git", "Vite", "Webpack", "npm / yarn", "VS Code"],
      icon: "🛠️"
    },
    {
      title: "Design & UX",
      skills: ["Responsive Design", "CSS Variables", "Flexbox & Grid", "Figma Design"],
      icon: "🎨"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>My Skills</h2>
        <div className="accent-line"></div>
      </div>
      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="skills-category-card">
            <div className="category-header">
              <span className="category-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>
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
