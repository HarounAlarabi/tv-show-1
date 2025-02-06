import React from "react";

const Spinner = ({ size = "lg", color = "primary", centered }) => {
  const spinner = (
    <div
      className={`spinner spinner--${size} spinner--${color}`}
      role="status"
      aria-label="Loading"
    />
  );

  return centered ? (
    <div className="spinner-container spinner-container--fixed">{spinner}</div>
  ) : (
    spinner
  );
};

export default Spinner;
