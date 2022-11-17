import { React, useState } from 'react';
import SquareColor from './SquareColor';

const StatesSquares = () => {
  const [state, setState] = useState('black');
  return (
    <div className="containerState">
      <SquareColor color={state} setState={setState} default={'yellow'} />
      <SquareColor color={state} setState={setState} default={'red'} />
      <SquareColor color={state} setState={setState} default={'green'} />
    </div>
  );
};

export default StatesSquares;
