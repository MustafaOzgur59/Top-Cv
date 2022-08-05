import React from "react";
import PreviewContent from "./PreviewContent";
import PreviewFotoCard from "./PreviewFotoCard";
export default function PreviewMain({ cv }) {
  return (
    <div className="PreviewMain-container">
      <PreviewContent cv={cv}></PreviewContent>
      <PreviewFotoCard cv={cv}></PreviewFotoCard>
    </div>
  );
}
