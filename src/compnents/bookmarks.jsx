import React from "react";
import PropTypes from "prop-types";

const BookMark = (props) => {
  return props.status ? (
    <button onClick={props.onToggle}>
      <i className="bi bi-bookmark-fill"></i>
    </button>
  ) : (
    <button onClick={props.onToggle}>
      <i className="bi bi-bookmark-star"></i>
    </button>
  );
};

BookMark.propTypes = {
  status: PropTypes.bool,
};

export default BookMark;
