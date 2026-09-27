import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Heavy page (charting library) -> the candidate for lazy loading in Practical 8
const Analytics = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/jalisa2106/repos')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(setRepos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading-state">Loading analytics...</p>;
  if (error) return <div className="error-banner"><div className="error-message-box">{error}</div></div>;

  const counts = repos.reduce((acc, repo) => {
    const lang = repo.language || 'Unspecified';
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {});
  const data = Object.entries(counts).map(([name, count]) => ({ name, count }));

  return (
    <section id="analytics" className="skills-section" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div className="section-header">
        <h2>GitHub Analytics</h2>
        <div className="accent-line"></div>
      </div>
      <div style={{ width: '100%', height: 340 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis allowDecimals={false} stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="count" fill="#00F0FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Analytics;
