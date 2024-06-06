// src/components/AgeResult.js

import React from "react";

const AgeResult = ({ age }) => {
  return (
    <div className="card">
      <div className="innercard2">
      <div className="container">
        <div className="output">
          <h1><span id="YY">--</span>years</h1>
          <h1><span id="MM">--</span>months</h1>
          <h1><span id="DD">--</span>days</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AgeResult;
