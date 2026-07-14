import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
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
        <Route path="/" element={
          <>
            <Header name={studentName} themeColor={headerTheme} />
            <About />
            <Skills skillList={mySkills} />
            <Projects />
            <Contact />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;