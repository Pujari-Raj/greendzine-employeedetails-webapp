import React from "react";

const ProgressBar = ({ productivityvalue }) => {
  const currentValue = productivityvalue;
  const maxValue = 150;

  const progressStyle = {
    appearance: "none",
    height: "15px",
    border: '2px solid #36A546',
    borderRadius: "100px",
    // background: `linear-gradient(to right, #36A546 0%, #36A546 ${
    //   (100 / maxValue) * currentValue}%, transparent ${(100 / maxValue) * currentValue}%, transparent)`,
    background: `linear-gradient(to right, #36A546 ${currentValue}%, transparent ${maxValue}%)`,
  };

  return (
    <div>
      <progress style={progressStyle} value={currentValue} max={maxValue}>
        {currentValue}%
      </progress>
    </div>
  );
};

export default ProgressBar;
