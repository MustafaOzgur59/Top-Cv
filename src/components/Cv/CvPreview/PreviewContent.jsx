import React from "react";
import PreviewExperienceCard from "./PreviewExperienceCard";
import PreviewEducationCard from "./PreviewEducationCard";

export default function PreviewContent({ cv }) {
  return (
    <div className="PreviewContent-container">
      <section className="description-container">
        <h3>Description</h3>
        {cv.personalInfo.description}
      </section>
      <section className="experience-container">
        <h3>Experiences</h3>
        {cv.experiences.map((experience) => {
          return (
            <PreviewExperienceCard
              key={experience.id}
              experience={experience}
            />
          );
        })}
      </section>
      <section className="education-container">
        <h3>Education</h3>
        {cv.educations.map((education) => {
          return (
            <PreviewEducationCard key={education.id} education={education} />
          );
        })}
      </section>
    </div>
  );
}
