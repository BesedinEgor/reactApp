import { React } from 'react';
import PropTypes from 'prop-types';

const SquareColor = (props) => {
  SquareColor.propTypes = {
    color: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    default: PropTypes.string.isRequired,
  };
  return (
    <div className="container">
      <div
        className="square"
        style={{
          backgroundColor: props.color,
        }}
      >
        Object
      </div>
      <button
        type="button"
        className="stateButton"
        style={{ backgroundColor: props.default }}
        onClick={(el) => {
          el.style = { backgroundColor: props.setState(props.default) };
        }}
      >
        States color
      </button>
    </div>
  );
};

export default SquareColor;
