import Navbar from "./navbar/Navbar";
import HeroBanner from "./banner/Banner";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectShowcase from "./components/ProjectShowcase";

function App() {
  return (
    <>
      <HeroBanner />
      <Navbar />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ProjectShowcase />
      <ContactSection />
    </>
  );
}

export default App;
