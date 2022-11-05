import React from "react";
import PropTypes from "prop-types";

const Qualitie = (props) => {
  return (
    <span className={"badge m-2 bg-" + props.qualitie.color}>
      {props.qualitie.name}
    </span>
  );
};

export default Qualitie;
