import React from "react";

export default function Header({image}) {
  return (
    <div className="image-container">
      <img
        src={image}
        alt="background"
      />

      <div className="half-circle"></div>
    </div>
  );
}
