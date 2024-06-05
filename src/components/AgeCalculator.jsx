// src/components/AgeCalculator.js

import React from "react";
import AgeForm from "./AgeForm";
import AgeResult from "./AgeResult";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  return (
    <div className="age-calculator">
      <AgeForm />
      <AgeResult />
    </div>
  );
};

export default AgeCalculator;
