import React from "react";
import Card from "react-bootstrap/Card";
import "./Content.css";

export default function Content() {
  return (
    <>
      <div className="container-content">
        <h3 className="title-section-1">About me</h3>
        <h1 className="quote">Journey before destination</h1>
        <p className="text-aboutme">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium
          dignissim odio nec scelerisque. Quisque ac erat pulvinar, finibus
          felis in, elementum ipsum. Ut hendrerit, turpis eu posuere dignissim,
          eros augue imperdiet tellus, vel cursus nibh ex eu tortor. Nullam mi
          turpis, malesusuere dignissim, eros augue imperdiet tellus, vel cursus
          nibh ex eu tortor. Nullam mi turpis, malesusuere dignissim, eros augue
          imperdiet tellus, vel cursus nibh ex eu tortor. Nullam mi turpis,
          malesu
        </p>
        <h3 className="title-section-2">Skills</h3>
        <div>List of skills</div>
      </div>
    </>
  );
}
