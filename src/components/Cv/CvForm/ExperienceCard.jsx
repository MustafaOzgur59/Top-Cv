import React from "react";

export default function ExperienceCard({ id, experience, onChange, onDelete }) {
  return (
    <div className="experience-card-container">
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={experience.position}
        onChange={(e) => onChange(e, id)}
      />
      <input
        type="text"
        placeholder="Company"
        name="company"
        value={experience.company}
        onChange={(e) => onChange(e, id)}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={experience.city}
        onChange={(e) => onChange(e, id)}
      />
      <input
        type="date"
        placeholder="From"
        name="from"
        value={experience.from}
        onChange={(e) => onChange(e, id)}
      />
      <input
        type="date"
        placeholder="To"
        name="to"
        value={experience.to}
        onChange={(e) => onChange(e, id)}
      />

      <button onClick={(e) => onDelete(e, id)}>Delete</button>
    </div>
  );
}
