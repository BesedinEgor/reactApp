import { React } from 'react';
import PropTypes from 'prop-types';

const SquareColor = (props) => {
  SquareColor.propTypes = {
    color: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    recomended: PropTypes.string.isRequired,
  };
  return (
    <div className="container">
      <button
        type="button"
        className="stateButton"
        style={{ backgroundColor: props.color }}
        onClick={() => {
          <div
            className="square"
            style={{ backgroundColor: props.setState(props.recomended) }}
          >
            Object
          </div>;
        }}
      >
        States color
      </button>
    </div>
  );
};

export default SquareColor;
