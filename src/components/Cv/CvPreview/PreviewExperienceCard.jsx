import React from "react";

function PreviewExperienceCard({ experience }) {
  console.log(experience);
  return (
    <div>
      <p>Hello</p>
      <p>{experience.position}</p>
    </div>
  );
}

export default PreviewExperienceCard;
