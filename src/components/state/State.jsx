import { useState, useEffect } from 'react';

const State = () => {
  const [status, setStatus] = useState(true);
  const [arrElem, setArrElem] = useState([]);

  useEffect(() => {
    setArrElem([...arrElem, 'text']);
    console.log(arrElem);
  }, [status]);

  useEffect(() => {
    console.log('я родился');
  }, []);

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
