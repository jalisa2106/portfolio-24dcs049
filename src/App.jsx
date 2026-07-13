import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  // Define data to pass as props matching Practical 1 specifications
  const studentName = "Jalisa Malik";
  const mySkills = ["React", "Next.js", "TypeScript", "FastAPI", "MongoDB", "PostgreSQL"];
  const headerTheme = "#00F0FF"; // Cyber Blue accent color

  return (
    <div>
      <Header name={studentName} themeColor={headerTheme} />
      <NavBar />
      <About />
      <Skills skillList={mySkills} />
      <Footer />
    </div>
  );
}

export default App;