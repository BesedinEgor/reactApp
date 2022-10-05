// eslint-disable-next-line no-unused-vars
import React from 'react';

import GeneratingElements from '../generatingElements/GeneratingElements';
import { cloneObjects } from '../../App';

const Main = () => {
  return (
    <div className="wrapper">
      <div className="titleItem">
        <h1>шо по реакту?!</h1>
      </div>
      <section className="elements">{GeneratingElements(cloneObjects)}</section>
    </div>
  );
};

export default Main;
