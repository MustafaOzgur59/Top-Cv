import React from "react";
import PreviewExperienceCard from "./PreviewExperienceCard";
import PreviewEducationCard from "./PreviewEducationCard";

export default function PreviewContent({ cv }) {
  return (
    <div className="PreviewContent-container">
      PreviewContent
      <section>Description</section>
      {cv.experiences.map((experience) => {
        return <PreviewExperienceCard experience={experience} />;
      })}
      {cv.educations.map((education) => {
        return <PreviewEducationCard education={education} />;
      })}
    </div>
  );
}
