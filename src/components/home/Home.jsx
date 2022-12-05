import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="routs">
      <h1
        className="routs__title"
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
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
            <Link to={'/posts'}>Posts</Link>
          </li>
          <li className="routs__item">
            <Link to={'/getposts'}>Get Posts</Link>
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
