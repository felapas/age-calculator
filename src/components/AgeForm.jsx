// src/components/AgeForm.js

import React from "react";

const AgeForm = ({ onSubmit }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>Day</label>
        <input type="number" />
      </div>
      <div>
        <label>Month</label>
        <input type="number" />
      </div>
      <div>
        <label>Year</label>
        <input type="number" />
      </div>
      <button type="submit">Calculate Age</button>
    </form>
  );
};

export default AgeForm;
