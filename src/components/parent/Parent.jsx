import React from 'react';
import PropTypes from 'prop-types';

const Parent = (props) => {
  Parent.propTypes = {
    children: PropTypes.string.isRequired,
  };
  return <div className="current">{props.children}</div>;
};

export { Parent };
