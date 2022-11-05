import React from "react";

const Qualitie = (props) => {
  return (
    <span className={"badge m-2 bg-" + props.qualitie.color}>
      {props.qualitie.name}
    </span>
  );
};

export default Qualitie;
