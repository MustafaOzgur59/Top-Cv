import React, { Component } from "react";
import PreviewContent from "./PreviewContent";
import PreviewFotoCard from "./PreviewFotoCard";
export default class PreviewMain extends Component {
  render() {
    return (
      <div className="PreviewMain-container">
        <PreviewContent></PreviewContent>
        <PreviewFotoCard></PreviewFotoCard>
      </div>
    );
  }
}
