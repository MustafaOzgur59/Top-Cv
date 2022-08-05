import React from "react";
import "./styles/experience.css";
import ExperienceCard from "./ExperienceCard";
export default function Experience({
  experiences,
  onChange,
  onAddExperience,
  onDeleteExperience,
}) {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      {experiences.map((exp) => {
        return (
          <ExperienceCard
            key={exp.id}
            onChange={onChange}
            onDelete={onDeleteExperience}
            id={exp.id}
            experience={exp}
          ></ExperienceCard>
        );
      })}
      <button onClick={onAddExperience}>Add</button>
    </div>
  );
}
