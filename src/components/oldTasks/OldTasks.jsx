import React from 'react';
import PropTypes from 'prop-types';

const OldTasks = ({ children }) => {
  OldTasks.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return <div>{children}</div>;
};

export { OldTasks };
