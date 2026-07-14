import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="about-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-header">
        <h2>Contact Me</h2>
        <div className="accent-line"></div>
      </div>

      <div className="about-card" style={{ maxWidth: "600px", width: "100%", margin: "0 auto", position: "relative" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h3>Get in Touch</h3>
          <button
            type="button"
            onClick={() => setShowTooltip(!showTooltip)}
            className="nav-link-btn"
            style={{ padding: "0.25rem 0.75rem", fontSize: "0.8rem", cursor: "pointer" }}
          >
            {showTooltip ? "Hide Help" : "Show Help"}
          </button>
        </div>

        {showTooltip && (
          <div style={{ background: "rgba(0, 240, 255, 0.1)", border: "1px solid var(--primary)", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem", fontSize: "0.9rem", color: "var(--text-main)", lineHeight: '1.5' }}>
            <strong>Need assistance?</strong> Fill out the form below. As a feature of this React application, your input will be captured and displayed below in real-time.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid var(--card-border)", background: "rgba(9, 13, 22, 0.5)", color: "#fff", boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid var(--card-border)", background: "rgba(9, 13, 22, 0.5)", color: "#fff", boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" style={{ width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid var(--card-border)", background: "rgba(9, 13, 22, 0.5)", color: "#fff", boxSizing: "border-box", resize: "vertical" }} />
          </div>
          <button type="submit" className="cta-primary" style={{ cursor: "pointer", border: "none", width: "100%" }}>Send Message</button>
        </form>

        <div style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid var(--card-border)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', marginTop: '0' }}>Live Preview</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 0.5rem' }}><strong>Name:</strong> {formData.name || '-'}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 0.5rem' }}><strong>Email:</strong> {formData.email || '-'}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0' }}><strong>Message:</strong> {formData.message || '-'}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
