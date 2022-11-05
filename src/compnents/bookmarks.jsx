import React from "react";

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

export default BookMark;
