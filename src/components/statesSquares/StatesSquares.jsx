import { React, useState } from 'react';
import { SquareColor } from './SquareColor';

const StatesSquares = () => {
  const [state, setState] = useState('black');
  return (
    <div className="containerState">
      <SquareColor color={state} setState={setState} folt={'yellow'} />
      <SquareColor color={state} setState={setState} folt={'red'} />
      <SquareColor color={state} setState={setState} folt={'green'} />
    </div>
  );
};

export { StatesSquares };
