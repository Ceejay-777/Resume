import MyImage from "../../reuseables/MyImage.jsx";
import Socials from "../../reuseables/Socials.jsx";

const SectionIntro = () => {
  return (
    <section className="section section-intro">
      <h1 className="sectionTitle">Me</h1>
      <MyImage />
      <div className="my-intro">
        <p>Hello There!</p>
        <h1>
          I'm <span className="accent">covenant</span>
        </h1>
        <h4>I'm a web developer</h4>
      </div>
      <Socials />
    </section>
  );
};

export default SectionIntro;
