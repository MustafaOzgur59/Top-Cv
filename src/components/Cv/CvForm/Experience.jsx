import React from "react";
import "./styles/experience.css";
import ExperienceCard from "./ExperienceCard";
export default function Experience({ experiences, onChange }) {
  return (
    <div>
      <h1>Experience</h1>
      {experiences.map((exp) => {
        return (
          <ExperienceCard
            key={exp.id}
            onChange={onChange}
            id={exp.id}
            experience={exp}
          ></ExperienceCard>
        );
      })}
    </div>
  );
}
