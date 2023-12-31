import React, { useState } from "react";
import { experiences } from "../../data";
import arrow from "../../assets/Icons/down.svg";

export const SectionExperience = () => {
  const [currentExp, setCurrentExp] = useState("BrainBench");

  const current = experiences.find(
    (experience) => experience.nameTag === currentExp
  );

  const handleExp = (event) => {
    setCurrentExp(event.target.textContent);
  };

  return (
    <section className="section section-exp">
      <h2 className="sectionTitle">Work Experience</h2>

      <div className="exp-opt-bar">
        {experiences.map((experience, index) => {
          return (
            <button
              key={index}
              className={`tag ${
                experience.nameTag === currentExp && "active-exp"
              }`}
              onClick={handleExp}
            >
              {experience.nameTag}
            </button>
          );
        })}
      </div>

      <div className="exp-info">
        <h4 className="exp-title">{current.title}</h4>
        <p className="exp-company">{current.company}</p>
        <p className="exp-date">{current.date}</p>
        <ul>
          {current.duties.map((duty, index) => {
            return (
              <li className="exp-duty" key={index}>
                <img src={arrow} alt=">" className="right-arrow"/>
                <p className="exp-duty-text">
                  {duty}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
