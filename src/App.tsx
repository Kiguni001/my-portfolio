import Navbar from "./navbar/Navbar";
import HeroBanner from "./banner/Banner";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectShowcase from "./components/ProjectShowcase";
import SkillsSection from "./components/SkillsSection";
import WhyChooseMe from "./components/WhyChooseMe";

function App() {
  return (
    <>
      <HeroBanner />
      <Navbar />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ProjectShowcase />
      <WhyChooseMe />
      <ContactSection />
    </>
  );
}

export default App;
