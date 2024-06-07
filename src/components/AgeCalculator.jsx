// src/components/AgeCalculator.jsx
import React, { useState } from "react";
import AgeForm from "./AgeForm";
import AgeResult from "./AgeResult";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  const calculateAge = (day, month, year) => {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(year, month, 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays });
  };

  return (
    <div className="age-calculator">
      <AgeForm onSubmit={calculateAge} />
      <AgeResult age={age} />
    </div>
  );
};

export default AgeCalculator;
