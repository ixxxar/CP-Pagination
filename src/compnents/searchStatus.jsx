import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ number }) => {
  return number.toString()[number.toString().length - 1] === "1" &&
    (number < 10 || number > 20) ? (
    <h3 className="m-2">
      <span className="badge bg-primary">
        {number} человек тусанёт с тобой сегодня
      </span>
    </h3>
  ) : (number.toString()[number.toString().length - 1] === "2" ||
      number.toString()[number.toString().length - 1] === "3" ||
      number.toString()[number.toString().length - 1] === "4") &&
    (number < 10 || number > 20) ? (
    <h3 className="m-2">
      <span className="badge bg-primary">
        {number} человека тусанут с тобой сегодня
      </span>
    </h3>
  ) : number === 0 ? (
    <h3 className="m-2">
      <span className="badge bg-danger">Никто не тусанёт с тобой сегодня</span>
    </h3>
  ) : (
    <h3 className="m-2">
      <span className="badge bg-primary">
        {number} человек тусанёт с тобой сегодня
      </span>
    </h3>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number,
};

export default SearchStatus;
