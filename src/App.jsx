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