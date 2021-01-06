import React from "react";

const Submit = (props) => {
  return (
    <div className="inputBox">
      <input type="submit" value={props.children} />
    </div>
  );
};

export default Submit;
