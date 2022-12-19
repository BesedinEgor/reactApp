import React from 'react';
import { PropTypes } from 'prop-types';
import { MantineProvider, Checkbox } from '@mantine/core';

const OutputTasks = ({ items }) => {
  OutputTasks.propTypes = {
    items: PropTypes.array.isRequired,
  };
  return (
    <MantineProvider>
      {items.map((listItem) => {
        return (
          <div key={listItem.id}>
            <Checkbox className="todoList__checkbox" label={listItem.title} />
          </div>
        );
      })}
    </MantineProvider>
  );
};

export { OutputTasks };
