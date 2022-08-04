import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import "./styles/cvform.css";
export default function CvForm({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) {
  return (
    <div className="cv-form">
      <Personal
        personalInfo={cv.personalInfo}
        onChange={onChangePersonal}
      ></Personal>
      <Education
        educations={cv.educations}
        onChangeEducation={onChangeEducation}
        onAddEducation={onAddEducation}
        onDeleteEducation={onDeleteEducation}
      ></Education>
      <Experience
        experiences={cv.experiences}
        onChange={onChangeExperience}
        onAddExperience={onAddExperience}
        onDeleteExperience={onDeleteExperience}
      ></Experience>
    </div>
  );
}
