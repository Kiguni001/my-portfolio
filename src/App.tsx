import Navbar from "./navbar/Navbar";
import HeroBanner from "./banner/Banner";
import Skills from "./components/Skills";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <HeroBanner />
      <Navbar />
      <AboutSection />
      <SkillsSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
