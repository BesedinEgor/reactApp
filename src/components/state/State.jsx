import { useState } from 'react';

const State = () => {
  const [status, setStatus] = useState(true);

  return (
    <div className="current">
      <button
        type="button"
        className="stateButton"
        onClick={() => setStatus(!status)}
      >
        State change
      </button>
      <div
        className="stateSquare"
        style={
          !status ? { backgroundColor: 'red' } : { backgroundColor: 'green' }
        }
      />
    </div>
  );
};

export default State;
