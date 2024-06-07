// src/components/AgeForm.jsx
import React, { useState } from "react";
import SubmitBtn from "../assets/icon-arrow.svg";

const AgeForm = ({ onSubmit }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (day && month && year) {
      onSubmit(day, month, year);
    }
  };

  return (
    <div className="card">
      <div className="innercard1">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form_container">
              <div className="block">
                <label htmlFor="day">Day</label>
                <input
                  type="number"
                  id="day"
                  placeholder="DD"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
                <small></small>
              </div>
              <div className="block">
                <label htmlFor="month">Month</label>
                <input
                  type="number"
                  id="month"
                  placeholder="MM"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
                <small></small>
              </div>
              <div className="block">
                <label htmlFor="year">Year</label>
                <input
                  type="number"
                  id="year"
                  placeholder="YYYY"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
                <small></small>
              </div>
            </div>
            <div className="submit_block">
              <hr />
              <button type="submit" className="submit_btn">
                <img src={SubmitBtn} alt="Submit" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgeForm;
