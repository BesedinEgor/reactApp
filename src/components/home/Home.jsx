import { Link } from 'react-router-dom';

const Home = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((todos) => console.log(todos));

  return (
    <div className="routs">
      <h1 className="routs__title" style={{ textAlign: 'center' }}>
        Home page
      </h1>
      <nav className="routs__menu">
        <h2 className="routs__menu-title">Routs:</h2>
        <ul className="routs__items">
          <li className="routs__item">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="routs__item">
            <Link to={'/info'}>Info</Link>
          </li>
          <li className="routs__item">
            <Link to={'/training-tasks'}>TrainingTasks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Home };