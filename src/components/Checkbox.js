import React from "react";
import "../App.css";

const Checkbox = (props) => {
  const handleCheck = () => {
    props.onCheck(!props.check);
  };
  return (
    <div className="Checkbox">
      <div className="Checkbox-box" onClick={handleCheck}>
        <div className="Checkbox-tick">{props.check && <p>✓</p>}</div>
      </div>
      <div className="Checkbox-label">
        <p>{props.label}</p>
      </div>
    </div>
  );
};

export default Checkbox;
