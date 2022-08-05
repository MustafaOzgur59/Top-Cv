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
  handlePrint,
  handleReset,
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
      <div className="utilityButtons">
        <button onClick={(e) => handleReset()}>Reset</button>
        <button onClick={() => handlePrint()}>Generate PDF</button>
      </div>
    </div>
  );
}
