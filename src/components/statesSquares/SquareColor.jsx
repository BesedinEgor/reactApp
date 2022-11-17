import React from 'react';
import PropTypes from 'prop-types';

const SquareColor = ({ color, setState, folt }) => {
  SquareColor.propTypes = {
    color: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    folt: PropTypes.string.isRequired,
  };
  return (
    <div className="container">
      <div
        className="square"
        style={{
          backgroundColor: color,
        }}
      >
        Object
      </div>
      <button
        type="button"
        className="stateButton"
        style={{ backgroundColor: folt }}
        onClick={() => {
          setState(folt);
        }}
      >
        States color
      </button>
    </div>
  );
};

export default SquareColor;
