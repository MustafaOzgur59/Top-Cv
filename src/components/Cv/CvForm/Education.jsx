import React from "react";
import "./styles/education.css";
import EducationCard from "./EducationCard";

export default function Education({
  educations,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) {
  return (
    <div className="education-container">
      <h1>Education</h1>
      {educations.map((education) => {
        return (
          <EducationCard
            education={education}
            key={education.id}
            id={education.id}
            onChange={onChangeEducation}
            onDelete={onDeleteEducation}
          />
        );
      })}
      <button onClick={(e) => onAddEducation(e)} className="add-btn">
        Add
      </button>
    </div>
  );
}
