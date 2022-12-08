import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const GetPosts = () => {
  const [output, setOutput] = useState(''); //стэйт для инпута
  const [data, setData] = useState(false);

  function getInputValue(id) {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('server error');
        })
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }
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
            Введите номер поста для его вывода:
            <input
              className="getposts__input"
              type="number"
              onChange={(event) => {
                setOutput(event.target.value);
              }}
              value={output}
            />
            <button
              className="getposts__button"
              type="submit"
              onClick={() => getInputValue(output)}
              disabled={output <= 0 || output > 100 || output.length === 0}
            >
              show post
            </button>
          </label>
        </form>
        {data ? (
          <div className="getposts__item" key={data.id}>
            <h3 className="getposts__item-id">{data.id}</h3>
            <p className="getposts__item-title">{data.title}</p>
            <br />
            <p className="getposts__items-content">{data.body}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export { GetPosts };
