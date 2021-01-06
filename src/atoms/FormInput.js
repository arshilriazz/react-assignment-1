import React from "react";

const FormInput = (props) => {
  return (
    <div className="inputBox">
      <label for={props.idName}>{props.label}</label>
      <input id={props.idName} type={props.type} required="required" />
    </div>
  );
};

export default FormInput;
