import React from "react";

function PreviewEducationCard({ education }) {
  const objectString = JSON.stringify(education);
  return (
    <div>
      PreviewEducationCard
      {objectString}
    </div>
  );
}

export default PreviewEducationCard;
