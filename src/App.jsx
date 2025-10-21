import './index.css';
import SpaceBG from './components/SpaceBG';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

const App = () => {
  return (
    <div className="relative">
      <SpaceBG />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App
