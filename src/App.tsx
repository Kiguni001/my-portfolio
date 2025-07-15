import Navbar from "./navbar/Navbar";
import HeroBanner from "./banner/Banner";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectShowcase from "./components/ProjectShowcase";
import SkillGrid from "./components/SkillGrid";

function App() {
  return (
    <>
      <HeroBanner />
      <Navbar />
      <AboutSection />
      <SkillGrid />
      <Skills />
      <ProjectsSection />
      <ProjectShowcase />
      <ContactSection />
    </>
  );
}

export default App;
