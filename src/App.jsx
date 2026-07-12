import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  // Define data to pass as props
  const studentName = "Jalisa Malik";
  const mySkills = ["React", "JavaScript", "HTML & CSS", "Node.js"];
  const headerTheme = "#2c3e50"; // Dark blue theme

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