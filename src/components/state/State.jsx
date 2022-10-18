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
      {!status ? (
        <div className="stateSquare" style={{ backgroundColor: 'green' }} />
      ) : (
        <div className="stateSquare" style={{ backgroundColor: 'red' }} />
      )}
    </div>
  );
};

export default State;
