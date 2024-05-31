import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Experience from "./Pages/Experience";
import { ExperienceData } from "./Data/ExperienceData";
import { EducationData } from "./Data/EducationData";
import { ProjectData } from "./Data/ProjectData";

import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="">
      <NavBar />
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skill />
      </section>
      <section id="Experience">
        <Experience ExperienceData={ExperienceData} />
      </section>
      <section id="Education">
        <Education EducationData={EducationData} />
      </section>
      <section id="Projects">
        <Projects ProjectData={ProjectData} />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
