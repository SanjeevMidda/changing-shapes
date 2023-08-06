import React from "react";
import { useState } from "react";

const Shape = ({ backgroundColor }) => {
  const [height, setHeight] = useState(`${300}px`);

  let shapeStyles = {
    backgroundColor: backgroundColor,
    height: height,
  };

  function randomHeight() {
    return `${Math.floor(Math.random() * 500)}px`;
  }

  setInterval(() => setHeight(randomHeight), 1000);

  return (
    <div className="shape" style={shapeStyles}>
      <div className="eyeContainer">
        <div className="eye">
          <div className="innerEye"></div>
        </div>
        <div className="eye">
          <div className="innerEye"></div>
        </div>
      </div>
    </div>
  );
};

export default Shape;
