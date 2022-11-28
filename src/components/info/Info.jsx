import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <>
      <h1 className="title" style={{ textAlign: 'center' }}>
        Information page
      </h1>
      <div className="back"><Link to={'/'}>Back</Link></div>
    </>
  );
};

export { Info };
