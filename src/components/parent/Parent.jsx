import React from 'react';
import PropTypes from 'prop-types';

const Parent = ({ children }) => {
  Parent.propTypes = {
    children: PropTypes.string.isRequired,
  };
  return <div className="current">{children}</div>;
};

export { Parent };
