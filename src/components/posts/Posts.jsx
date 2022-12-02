import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [publications, setPublication] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPublication(posts));
  }, []);

  return (
    <>
      <h1
        className="title"
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        Posts
      </h1>
      <Link className="back" to={'/'}>
        Back
      </Link>

      <div className="posts">
        {publications.map((posts) => {
          if (posts.id < 38) {
            return (
              <div className="posts__item" key={posts.id}>
                <h3 className="posts__item-id">{posts.id}</h3>
                <p className="posts__item-title">{posts.title}</p>
                <br />
                <p className="posts__items-content">{posts.body}</p>
              </div>
            );
          }
          if (posts.id === 77) {
            return (
              <div className="posts__item" key={posts.id}>
                <h3 className="posts__item-id unique">{posts.id}</h3>
                <p className="posts__item-title">{posts.title}</p>
                <br />
                <p className="posts__items-content">{posts.body}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export { Posts };
