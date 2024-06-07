import React, { useState } from "react";
import SubmitBtn from "../assets/icon-arrow.svg";
import "./AgeCalculator.css"; // Make sure to import the CSS file

const AgeForm = ({ onSubmit }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const dayInt = parseInt(day);
    const monthInt = parseInt(month);
    const yearInt = parseInt(year);

    if (!day) newErrors.day = "Day is required";
    else if (dayInt < 1 || dayInt > 31) newErrors.day = "Must be a valid day";

    if (!month) newErrors.month = "Month is required";
    else if (monthInt < 1 || monthInt > 12) newErrors.month = "Must be a valid month";

    if (!year) newErrors.year = "Year is required";
    else if (yearInt > new Date().getFullYear()) newErrors.year = "Must be a valid year";

    if (!newErrors.day && !newErrors.month && !newErrors.year) {
      const date = new Date(yearInt, monthInt - 1, dayInt);
      if (date.getDate() !== dayInt || date.getMonth() + 1 !== monthInt || date.getFullYear() !== yearInt) {
        newErrors.date = "Invalid date";
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(day, month, year);
    }
  };

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2) {
      setDay(value);
    }
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2) {
      setMonth(value);
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4) {
      setYear(value);
    }
  };

  return (
    <div className="card">
      <div className="innercard1">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form_container">
              <div className="block">
                <label
                  htmlFor="day"
                  className={errors.day ? "error-label" : ""}
                >
                  Day
                </label>
                <input
                  type="number"
                  id="day"
                  placeholder="DD"
                  value={day}
                  onChange={handleDayChange}
                  className={errors.day ? "error-input" : ""}
                />
                {errors.day && <small className="error-message">{errors.day}</small>}
              </div>
              <div className="block">
                <label
                  htmlFor="month"
                  className={errors.month ? "error-label" : ""}
                >
                  Month
                </label>
                <input
                  type="number"
                  id="month"
                  placeholder="MM"
                  value={month}
                  onChange={handleMonthChange}
                  className={errors.month ? "error-input" : ""}
                />
                {errors.month && <small className="error-message">{errors.month}</small>}
              </div>
              <div className="block">
                <label
                  htmlFor="year"
                  className={errors.year || errors.date ? "error-label" : ""}
                >
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  placeholder="YYYY"
                  value={year}
                  onChange={handleYearChange}
                  className={errors.year || errors.date ? "error-input" : ""}
                />
                {errors.year && <small className="error-message">{errors.year}</small>}
              </div>
            </div>
            {errors.date && <small className="error-message">{errors.date}</small>}
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
