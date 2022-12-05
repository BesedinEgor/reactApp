import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const GetPosts = () => {
  const [output, setOutput] = useState(''); //стэйт для инпута
  const [value, setValue] = useState([]);

  function getInputValue() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setValue(posts));
  }

  return (
    <>
      <h1
        className="title"
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        Get posts
      </h1>
      <Link className="back" to={'/'}>
        Back
      </Link>

      <div className="getposts">
        <form className="current">
          <label className="getposts__label">
            <input
              className="getposts__input"
              type="number"
              placeholder="enter a number from 1 to 100"
              onChange={(event) => {
                setOutput(event.target.value);
              }}
              value={output}
            />
            <button
              className="getposts__button"
              type="submit"
              onClick={getInputValue}
              disabled={output <= 0 || output > 100 || output.length === 0}
            >
              show post
            </button>
          </label>
        </form>
      </div>

      {value.map((elem) => {
        return (
          <div className="posts__item" key={elem.id}>
            {elem.id}
          </div>
        );
      })}
    </>
  );
};

export { GetPosts };
