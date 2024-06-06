// src/components/AgeForm.js

import React from "react";
import SubmitBtn from "../assets/icon-arrow.svg";

const AgeForm = ({ onSubmit }) => {
  return (
    <div className="card">
      <div className="innercard1">
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form_container">
            <div className="block">
              <label htmlFor="day">Day</label>
              <input type="number" id="day" placeholder="DD" />
              <small></small>
            </div>
            <div className="block">
              <label htmlFor="month">Month</label>
              <input type="number" id="month" placeholder="MM" />
              <small></small>
            </div>
            <div className="block">
              <label htmlFor="year">Year</label>
              <input type="number" id="year" placeholder="YYYY" />
              <small></small>
            </div>
          </div>
          <div className="submit_block">
            <hr />
            <button type="submit" className="submit_btn">
              <img src={SubmitBtn}></img>
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AgeForm;
