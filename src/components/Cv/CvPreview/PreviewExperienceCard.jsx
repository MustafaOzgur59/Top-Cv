import React from "react";

function PreviewExperienceCard({ experience }) {
  // console.log(experience);
  return (
    <div className="preview-experience-card-container">
      <section className="fromTo">
        {experience.from} - {experience.to}
      </section>
      <section className="job-container">
        <h4>{experience.position}</h4>
        <p>
          {experience.company}, {experience.city}{" "}
        </p>
      </section>
    </div>
  );
}

export default PreviewExperienceCard;
