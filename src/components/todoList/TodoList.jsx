import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
  return (
    <>
      <h1
        className="title"
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        Todo list
      </h1>
      <Link className="back" to={'/'}>
        Back
      </Link>
    </>
  );
};

export { TodoList };
