import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <>
      <h1 className="title" style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        Information page
      </h1>
      <Link className='back' to={'/'}>Back</Link>
    </>
  );
};

export { Info };
