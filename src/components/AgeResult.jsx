// src/components/AgeResult.jsx
import React from "react";
import CountUp from "react-countup";

const AgeResult = ({ age }) => {
  const renderCountUp = (value) =>
    value !== "--" ? <CountUp start={0} end={value} duration={1} /> : "--";

  return (
    <div className="card">
      <div className="innercard2">
        <div className="container">
          <div className="output">
            <h1>
              <span id="YY" className="age-number">
                {renderCountUp(age.years)}
              </span>{" "}
              years
            </h1>
            <h1>
              <span id="MM" className="age-number">
                {renderCountUp(age.months)}
              </span>{" "}
              months
            </h1>
            <h1>
              <span id="DD" className="age-number">
                {renderCountUp(age.days)}
              </span>{" "}
              days
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeResult;
