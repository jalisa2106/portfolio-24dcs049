import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Define data to pass as props matching Practical 1 specifications
  const studentName = "Jalisa Malik";
  const mySkills = ["React", "Next.js", "TypeScript", "FastAPI", "MongoDB", "PostgreSQL"];
  const headerTheme = "#00F0FF"; // Cyber Blue accent color

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home studentName={studentName} headerTheme={headerTheme} mySkills={mySkills} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;