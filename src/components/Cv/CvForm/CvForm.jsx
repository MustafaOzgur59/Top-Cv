import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import "./styles/cvform.css";
export default function CvForm({ cv, onChangePersonal, onChangeExperience }) {
  return (
    <div className="cv-form">
      <Personal
        personalInfo={cv.personalInfo}
        onChange={onChangePersonal}
      ></Personal>
      <Education></Education>
      <Experience
        experiences={cv.experiences}
        onChange={onChangeExperience}
      ></Experience>
    </div>
  );
}
