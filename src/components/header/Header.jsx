import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="menu">
      <ul className="menu__items">
        <li className="menu__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/info">Info</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/getposts">Get Posts</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/training-tasks">TrainingTasks</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Header };
