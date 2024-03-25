import SectionIntro from "./SectionIntro";
import { SectionExperience } from "./SectionExperience";
import { SectionSkillset } from "./SectionSkillset";
import SectionProjects from "./SectionProjects";

const Home = () => {
  return (
    <main className="main">
      <SectionIntro />
      <SectionSkillset />
      <SectionProjects />
      <SectionExperience />
    </main>
  );
};

export default Home;
