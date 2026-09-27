## Practical 8 — Lazy Loading in React (Portfolio Project)

**Goal:** `React.lazy` + `Suspense` on all route-based components, and a **measured before/after**. *You must capture the "before" numbers first — they cannot be reconstructed later.*

**Repo:** `jalisa-portfolio` (Vite + React 19 + React Router 7)
**Current routes (`src/App.jsx`):** `/` → `Home`, `/projects` → `Projects`, `/contact` → `Contact`

---

### Step 8.1 — Add something worth splitting (a GitHub Analytics page)

`Projects.jsx` already fetches live repos from the GitHub API — this practical adds a second, heavier page that visualizes that data, giving a real reason to code-split.

```bash
npm install recharts
```

**`src/components/Analytics.jsx`**
```jsx
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
```

Add the link in `src/components/NavBar.jsx`, after the Projects link:
```jsx
<Link to="/analytics" className={`nav-link ${path === '/analytics' ? 'active' : ''}`}>Analytics</Link>
```

Replace `src/App.jsx` with the **eager (before)** version:
```jsx
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Analytics from './components/Analytics';

function App() {
  const studentName = "Jalisa Malik";
  const mySkills = ["React", "Next.js", "TypeScript", "FastAPI", "MongoDB", "PostgreSQL"];
  const headerTheme = "#00F0FF"; // Cyber Blue accent color

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home studentName={studentName} headerTheme={headerTheme} mySkills={mySkills} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
```

Commit this state: `git add -A && git commit -m "feat(p8): add GitHub analytics page (baseline before lazy loading)"`

### Step 8.2 — Capture the BEFORE numbers *(exact clicks in the guide, section P8)*
```bash
npm run build          # copy the whole output: file names + sizes
npm run preview        # opens http://localhost:4173  (use this, NOT npm run dev)
```
DevTools → Network → tick **Disable cache** → reload → note "requests / transferred / Finish" at the bottom. Take screenshots.

### Step 8.3 — Apply lazy loading

Replace `src/App.jsx` with the **lazy (after)** version:
```jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Practical 8: each page becomes its own chunk, downloaded only when the route is visited
const Home = lazy(() => import('./components/Home'));
const Projects = lazy(() => import('./components/Projects'));
const Analytics = lazy(() => import('./components/Analytics'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const studentName = "Jalisa Malik";
  const mySkills = ["React", "Next.js", "TypeScript", "FastAPI", "MongoDB", "PostgreSQL"];
  const headerTheme = "#00F0FF"; // Cyber Blue accent color

  return (
    <div>
      <NavBar />
      <Suspense
        fallback={
          <div className="loading-state" style={{ paddingTop: '8rem', textAlign: 'center' }}>
            <div className="spinner-large"></div>
            <p>Loading page...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home studentName={studentName} headerTheme={headerTheme} mySkills={mySkills} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
```

`React.lazy` needs **default exports** — `Home`, `Projects`, `Contact`, and the new `Analytics` all already export default, so no changes needed there.

> `.spinner-large` / `.error-banner` may not exist yet in `src/index.css` — if not, add a small rule reusing the existing `--primary` accent (matching the spinner already inlined in `Projects.jsx`) so the fallback UI matches the dark/Cyber-Blue theme instead of falling back to default browser styling.

### Step 8.4 — Capture the AFTER numbers
```bash
npm run build          # you should now see several separate .js files (chunks)
npm run preview
```
Network tab: throttle to **Slow 3G**, reload, watch the "Loading page..." fallback; click **Analytics** and confirm the `recharts`-containing chunk loads only then (and not on initial load of `/`). Screenshots.

### Step 8.5 — Write the comparison (`docs/practical-08/performance-comparison.md`)

| | Before | After |
|---|---|---|
| Main JS file size (build output) | ___ kB | ___ kB |
| JS transferred on first page load (`/`) | ___ | ___ |
| Load time (Finish) on Slow 3G | ___ | ___ |
| Number of JS files | ___ | ___ |
| Size of the `Analytics` chunk (contains `recharts`) | — | ___ kB |

Then explain: lazy loading changes **when** code downloads, not the total; `recharts` (the heaviest dependency in this project) now loads only when a visitor actually opens `/analytics`, not on the initial portfolio load.

### Step 8.6 — Commit
```bash
git add -A
git commit -m "perf(p8): route-based code splitting with React.lazy and Suspense"
git tag practical-8
```

**Report should answer:** initial bundle vs chunk · why perceived performance improves · when lazy loading is not worth it (e.g. a portfolio this small, where `Home`/`Projects`/`Contact` are all lightweight and likely to be visited in the same session anyway — only `Analytics`, pulled down by `recharts`, is worth splitting out).

---

### Rubric mapping (from the Practical 8 problem definition)

| Criteria | How this project satisfies it |
|---|---|
| Lazy Loading Implementation (6) | `React.lazy()` applied to all 4 routes (`Home`, `Projects`, `Analytics`, `Contact`); single `Suspense` wrapper around `Routes` with a themed fallback |
| Code Splitting Evidence (5) | Network tab shows a separate chunk per route, with `recharts` isolated inside the `Analytics` chunk |
| Before/After Comparison (5) | `docs/practical-08/performance-comparison.md` table + before/after screenshots, captured in that order |
| Fallback UI (4) | `.loading-state` / `.spinner-large` fallback styled to the existing Cyber-Blue dark theme, doesn't crash on a slow chunk load |
