import { React, useState } from 'react';

const ChildrenTwo = () => {
  const [color, setColor] = useState(true);
  return (
    <>
      <div
        className="square"
        style={
          !color ? { backgroundColor: 'purple' } : { backgroundColor: 'yellow' }
        }
      >
        Children
      </div>
      <button
        className="stateButton"
        type="button"
        style={{
          width: '80px',
          height: '30px',
          backgroundColor: '#ccc',
          borderRadius: '10px',
          border: '1px solid #000',
          cursor: 'pointer',
        }}
        onClick={() => setColor(!color)}
      >
        State
      </button>
    </>
  );
};

export { ChildrenTwo };
