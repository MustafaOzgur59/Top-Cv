import React from "react";

function PreviewEducationCard({ education }) {
  console.log(education);
  console.log("Wtf");
  return (
    <div className="preview-education-card-container">
      <div className="fromTo">
        {education.from} - {education.to}
      </div>
      <div className="university-container">
        <h4>
          {education.universityName}, {education.city}
        </h4>
        <p>Degree: {education.degree}</p>
        <p>Subject: {education.subject}</p>
      </div>
    </div>
  );
}

export default PreviewEducationCard;
