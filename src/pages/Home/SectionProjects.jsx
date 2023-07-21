import React from "react";
import { projects } from "../../projectsdata.js";

export const SectionProjects = ({main}) => {
  return (
    <section className="section section-projects">
      <h2 className="sectionTitle">Projects</h2>

      <div className="projects">
        {projects.map((project, index) => {
          const { name, id, images, info } = project;
          if (!main && index < 2) {
            return (
              <div className="project" key={id}>
                <div className="project-header">
                  <h2>{index + 1}.</h2>
                  <h2>{name} project</h2>
                </div>

                <div className="project-imgs">
                  <div>
                    <img
                      src={images[0]}
                      alt="Project"
                      className=" project-img main-project-img"
                    />
                  </div>

                  <div className="more-project-imgs">
                    {images.slice(1).map((img, index) => {
                      return (
                        <div className="project-img-container">
                          <img
                            src={img}
                            alt="Project"
                            key={index}
                            className={"project-img"}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <p className="project-info">{info}</p>
              </div>
            );
          }
        })}
        <button className="btn">Show all</button>
      </div>
    </section>
  );
};